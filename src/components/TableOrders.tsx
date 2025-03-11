"use client";
import { useOrdersContext } from "@/hooks/useOrdersContext";
import React from "react";
import TheadBox from "./TheadBox";
import Tdescription from "./Tdescription";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const TableOrders = () => {
  const { orders } = useOrdersContext();
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <TheadBox title="Hora" />
            <TheadBox title="Método" />
            <TheadBox title="Monto" />
            <TheadBox title="Descripción" />
            <TheadBox title="Local" />
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((orders) => {
            const paymentString =
              orders.paymentMethod === "cash"
                ? "Efectivo"
                : orders.paymentMethod === "mercado_pago"
                ? "Mercado Pago"
                : "Pedidos Ya";

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
                      {description.item} - {description.quantity}{" "}
                      {description.type}
                    </p>
                  ))}
                </Tdescription>
                <Tdescription>{orders.local}</Tdescription>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrders;
