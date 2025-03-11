import React from "react";
import Header from "./Header";
import { Toaster } from "sonner";
import Link from "next/link";
import EditFlavourForm from "./EditFlavourForm";
interface Flavour {
  _id?: number;
  name: string;
  stock: number;
  local: string;
}
const FlavourEdit = ({ flavour }: { flavour: Flavour }) => {
  return (
    <>
      <Header />
      <Toaster />
      <main className="w-full flex flex-col p-4 gap-4">
        <section className="flex gap-4">
          <Link
            href="/inventario"
            className="text-eerie-black px-4 py-2 rounded-lg border border-eerie-black cursor-pointer font-bold"
          >
            {"<"}
          </Link>
          <h1 className="text-4xl font-bold">Editar sabor</h1>
        </section>
        <EditFlavourForm flavour={flavour} />
      </main>
    </>
  );
};

export default FlavourEdit;
