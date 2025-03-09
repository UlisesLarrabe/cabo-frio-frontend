"use client";
import { API_URL } from "@/consts/api_url";
import { Dayjs } from "dayjs";
import { createContext, useEffect, useState } from "react";

interface Order {
  _id?: string;
  local: string;
  totalPrice: number;
  paymentMethod: "cash" | "mercado_pago" | "pedidos_ya";
  description: {
    item: string;
    quantity: number;
    type: string;
  }[];
  createdAt: Dayjs;
}

interface OrdersContextType {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  addOrder: (order: Order) => Promise<Response>;
  getOrders: () => Promise<void>;
  getOrdersByLocal: (local: string) => Promise<void>;
}

export const OrdersContext = createContext<OrdersContextType | undefined>(
  undefined
);

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = async (order: Order): Promise<Response> => {
    try {
      const response = await fetch(`${API_URL}/orders/income`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      if (response.ok) {
        return response;
      }
      throw new Error("Error al enviar el pedido");
    } catch {
      return new Response(
        JSON.stringify({ error: "No se pudo enviar el pedido" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  };

  const getOrders = async () => {
    try {
      const response = await fetch(`${API_URL}/orders`);
      const data = await response.json();
      setOrders(data);
    } catch {
      console.error("Error al traer los pedidos");
    }
  };

  const getOrdersByLocal = async (local: string) => {
    try {
      const response = await fetch(`${API_URL}/orders/${local}`);
      const data = await response.json();
      setOrders(data);
    } catch {
      console.error("Error al traer los pedidos");
    }
  };

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <OrdersContext.Provider
      value={{ orders, setOrders, addOrder, getOrders, getOrdersByLocal }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
