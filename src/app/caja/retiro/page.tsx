"use client";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

import { Toaster } from "sonner";
import FormOutcome from "@/components/FormOutcome";

const page = () => {
  return (
    <>
      <Header />
      <Toaster />
      <main className="w-full flex flex-col p-4 gap-4">
        <section className="flex gap-4">
          <Link
            href="/caja"
            className="text-eerie-black px-4 py-2 rounded-lg border border-eerie-black cursor-pointer font-bold"
          >
            {"<"}
          </Link>
          <h1 className="text-4xl font-bold">Registrar retiro de caja</h1>
        </section>
        <FormOutcome />
      </main>
    </>
  );
};

export default page;
