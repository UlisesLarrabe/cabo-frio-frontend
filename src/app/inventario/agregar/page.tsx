import FlavourForm from "@/components/FlavourForm";
import GoBackSection from "@/components/GoBackSection";
import Header from "@/components/Header";
import React from "react";
import { Toaster } from "sonner";

const page = () => {
  return (
    <>
      <Header />
      <Toaster />
      <main className="w-full flex flex-col p-4 gap-4">
        <GoBackSection href="/inventario" title="Agregar nuevo sabor" />

        <FlavourForm />
      </main>
    </>
  );
};

export default page;
