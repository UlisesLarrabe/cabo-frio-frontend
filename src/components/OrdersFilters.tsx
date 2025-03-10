"use client";
import { LOCALS } from "@/consts/locals";
import { useOrdersContext } from "@/hooks/useOrdersContext";
import dayjs from "dayjs";
import React from "react";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const OrdersFilters = () => {
  const { getOrdersByLocal, getOrders, getOrdersByDate } = useOrdersContext();

  const handleLocalChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "allLocals") {
      await getOrders();
    } else {
      await getOrdersByLocal(e.target.value);
    }
  };

  const handleDateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = dayjs(e.target.value)
      .tz("America/Argentina/Buenos_Aires")
      .format("YYYY-MM-DD");
    await getOrdersByDate(date);
  };

  return (
    <section className="flex flex-col w-full gap-4">
      <h2 className="text-2xl font-semibold">Filtros</h2>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label className="text-lg font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            className="p-2 border  border-gray-300 rounded-lg bg-white text-gray-700 "
            onChange={handleDateChange}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-lg font-medium text-gray-700">Local</label>
          <select
            onChange={handleLocalChange}
            className="p-2 border  border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="allLocals">Todos los locales</option>
            {LOCALS.map((local) => (
              <option key={local} value={local}>
                {local}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default OrdersFilters;
