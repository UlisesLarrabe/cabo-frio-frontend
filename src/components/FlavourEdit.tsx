import React from "react";
import Header from "./Header";
import { Toaster } from "sonner";
import EditFlavourForm from "./EditFlavourForm";
import GoBackSection from "./GoBackSection";
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
        <GoBackSection href="/inventario" title="Editar sabor" />

        <EditFlavourForm flavour={flavour} />
      </main>
    </>
  );
};

export default FlavourEdit;
