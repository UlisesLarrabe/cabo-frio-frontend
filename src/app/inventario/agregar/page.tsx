import FlavourForm from "@/components/FlavourForm";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import { Toaster } from "sonner";

const page = () => {
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
          <h1 className="text-4xl font-bold">Agregar nuevo sabor</h1>
        </section>
        <FlavourForm />
      </main>
    </>
  );
};

export default page;
