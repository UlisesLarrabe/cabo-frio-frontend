"use client";
import { API_URL } from "@/consts/api_url";
import { Dayjs } from "dayjs";
import { createContext, useState } from "react";

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
    } catch (error) {
      console.error("Error al enviar el pedido");
      return new Response(
        JSON.stringify({ error: "No se pudo enviar el pedido" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  };
  return (
    <OrdersContext.Provider value={{ orders, setOrders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}
