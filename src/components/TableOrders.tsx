"use client";
import { useOrdersContext } from "@/hooks/useOrdersContext";
import React from "react";
import TheadBox from "./TheadBox";
import Tdescription from "./Tdescription";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { toast, Toaster } from "sonner";
import { useMovementsContext } from "@/hooks/useMovementsContext";

dayjs.extend(utc);
dayjs.extend(timezone);

const TableOrders = () => {
  const { orders, deleteOrderById } = useOrdersContext();
  const { getMovements } = useMovementsContext();
  const handleDeleteOrder = (id: string | undefined) => {
    if (!id) return;
    deleteOrderById(id)
      .then(() => {
        getMovements();
        toast.success("Pedido eliminado correctamente");
      })
      .catch(() => {
        toast.error("Error al eliminar el pedido");
      });
  };
  return (
    <div className="overflow-x-auto">
      <Toaster />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <TheadBox title="Hora" />
            <TheadBox title="Método" />
            <TheadBox title="Monto" />
            <TheadBox title="Descripción" />
            <TheadBox title="Local" />
            <TheadBox title="Acciones" />
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((orders) => {
            const paymentString =
              orders.paymentMethod === "cash"
                ? "Efectivo"
                : orders.paymentMethod === "mercado_pago"
                ? "Mercado Pago"
                : orders.paymentMethod === "pedidos_ya"
                ? "Pedidos Ya"
                : "Rappi";

            return (
              <tr key={orders._id}>
                <Tdescription>
                  {dayjs(orders.createdAt).format("HH:mm")}
                </Tdescription>

                <Tdescription>{paymentString}</Tdescription>
                <Tdescription>${orders.totalPrice}</Tdescription>
                <Tdescription>
                  {orders.description.map((description, index) => (
                    <p key={index}>
                      {description.item} - Cantidad: {description.quantity} -
                      Tipo: {description.type}
                    </p>
                  ))}
                </Tdescription>
                <Tdescription>{orders.local}</Tdescription>
                <Tdescription>
                  <button
                    onClick={() => handleDeleteOrder(orders._id)}
                    className="bg-red-500 text-white p-2 rounded-lg cursor-pointer hover:bg-red-400"
                  >
                    Eliminar
                  </button>
                </Tdescription>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrders;
