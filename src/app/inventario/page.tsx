import Header from "@/components/Header";
import InventoryTable from "@/components/InventoryTable";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col p-4 gap-4">
        <section className="flex justify-between">
          <h1 className="text-4xl font-bold ">Inventario de Helados</h1>
          <Link
            href="/inventario/agregar"
            className="bg-eerie-black text-snow px-4 py-2 rounded-lg cursor-pointer"
          >
            Agregar sabor
          </Link>
        </section>
        <InventoryTable />
      </main>
    </>
  );
};

export default page;
