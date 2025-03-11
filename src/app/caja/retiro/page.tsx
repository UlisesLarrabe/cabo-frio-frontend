"use client";
import Header from "@/components/Header";
import React from "react";

import { Toaster } from "sonner";
import FormOutcome from "@/components/FormOutcome";
import GoBackSection from "@/components/GoBackSection";

const page = () => {
  return (
    <>
      <Header />
      <Toaster />
      <main className="w-full flex flex-col p-4 gap-4">
        <GoBackSection href="/caja" title="Registrar retiro de caja" />

        <FormOutcome />
      </main>
    </>
  );
};

export default page;
