"use client";
import { useFlavoursContext } from "@/hooks/useFlavoursContext";
import React from "react";
import TheadBox from "./TheadBox";
import Tdescription from "./Tdescription";
import Link from "next/link";

const InventoryTable = () => {
  const { flavours } = useFlavoursContext();
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <TheadBox title="Nombre" />
            <TheadBox title="Stock" />
            <TheadBox title="Local" />
            <TheadBox title="Acciones" />
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {flavours.map((flavour) => (
            <tr key={flavour._id}>
              <Tdescription>{flavour.name}</Tdescription>
              <Tdescription>{flavour.stock}</Tdescription>
              <Tdescription>{flavour.local}</Tdescription>
              <Tdescription>
                <Link
                  href={`/inventario/${flavour._id}`}
                  className="border-b-2 cursor-pointer"
                >
                  Editar
                </Link>
              </Tdescription>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
