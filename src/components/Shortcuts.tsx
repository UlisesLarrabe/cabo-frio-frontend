import React from "react";

export const Shortcuts = () => {
  return (
    <article className="p-2 border border-gray-300 rounded-lg flex flex-col gap-2 w-1/2">
      <h3 className="font-bold text-xl">Acciones Rápidas</h3>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white rounded-lg p-2 w-1/2">
            Nueva Pedido
          </button>
          <button className="bg-blue-500 text-white rounded-lg p-2 w-1/2">
            Gestionar Stock
          </button>
        </div>

        <div className="flex gap-2">
          <button className="bg-blue-500 text-white rounded-lg p-2 w-1/2">
            Agregar Sabor
          </button>
          <button className="bg-blue-500 text-white rounded-lg p-2 w-1/2">
            Registrar Retiro
          </button>
        </div>
      </div>
    </article>
  );
};
