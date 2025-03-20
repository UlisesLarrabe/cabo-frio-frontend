"use client";
import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useMovementsContext } from "@/hooks/useMovementsContext";
import TheadBox from "./TheadBox";
import Tdescription from "./Tdescription";

dayjs.extend(utc);
dayjs.extend(timezone);

const TableBox = () => {
  const { movements } = useMovementsContext();

  return (
    <div className="p-2 border flex justify-center flex-col border-gray-300 rounded-lg min-w-3xs min-h-32 gap-2 w-full md:w-2/3">
      <h2 className="font-semibold text-2xl">Movimientos del día</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <TheadBox title="Hora" />
              <TheadBox title="Tipo" />
              <TheadBox title="Método" />
              <TheadBox title="Monto" />
              <TheadBox title="Descripción" />
              <TheadBox title="Local" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {movements.map((movement) => {
              const paymentString =
                movement.paymentMethod === "cash"
                  ? "Efectivo"
                  : movement.paymentMethod === "mercado_pago"
                  ? "Mercado Pago"
                  : movement.paymentMethod === "pedidos_ya"
                  ? "Pedidos Ya"
                  : "Rappi";

              const isIncome = movement.type === "income";
              const incomeColor = isIncome
                ? "text-green-800 bg-green-100"
                : "text-red-800 bg-red-100";
              return (
                <tr key={movement._id}>
                  <Tdescription>
                    {dayjs(movement.createdAt).format("HH:mm")}
                  </Tdescription>
                  <Tdescription>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${incomeColor}`}
                    >
                      {movement.type === "income" ? "Ingreso" : "Egreso"}
                    </span>
                  </Tdescription>
                  <Tdescription>{paymentString}</Tdescription>
                  <Tdescription>${movement.amount}</Tdescription>
                  <Tdescription>{movement.reason}</Tdescription>
                  <Tdescription>{movement.local}</Tdescription>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableBox;
