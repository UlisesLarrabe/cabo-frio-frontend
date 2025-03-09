"use client";
import { LOCALS } from "@/consts/locals";
import { useOrdersContext } from "@/hooks/useOrdersContext";
import React from "react";

const OrdersFilters = () => {
  const { getOrdersByLocal, getOrders } = useOrdersContext();

  const handleLocalChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "allLocals") {
      await getOrders();
    } else {
      await getOrdersByLocal(e.target.value);
    }
  };

  return (
    <section className="flex flex-col w-full gap-4">
      <h2 className="text-2xl font-semibold">Filtros</h2>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label>Fecha</label>
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-gray-700">Local</label>
          <select
            onChange={handleLocalChange}
            className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
