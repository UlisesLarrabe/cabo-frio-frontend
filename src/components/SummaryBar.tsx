import React from "react";

export const SummaryBar = () => {
  return (
    <article className="p-2 border border-gray-300 rounded-lg flex flex-col gap-2 w-1/2">
      <h3 className="text-xl font-bold ">
        Resumen de Ventas por Método de Pago
      </h3>
      <div className="flex gap-2 items-center ">
        <label className="min-w-40">Efectivo</label>
        <progress
          className="h-5 rounded-full bg-gray-200 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-green-500 [&::-webkit-progress-value]:to-green-600 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-300"
          value="75"
          max="100"
        ></progress>
        <span>70%</span>
      </div>
      <div className="flex gap-2 items-center ">
        <label className="min-w-40">Mercado Pago</label>
        <progress
          className="h-5 rounded-full bg-gray-200 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-green-500 [&::-webkit-progress-value]:to-green-600 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-300"
          value="20"
          max="100"
        ></progress>
        <span>20%</span>
      </div>
      <div className="flex gap-2 items-center ">
        <label className="min-w-40">PedidosYa</label>
        <progress
          className="h-5 rounded-full bg-gray-200 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-green-500 [&::-webkit-progress-value]:to-green-600 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-300"
          value="10"
          max="100"
        ></progress>
        <span>10%</span>
      </div>
    </article>
  );
};
