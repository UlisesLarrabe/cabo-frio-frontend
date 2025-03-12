import Header from "@/components/Header";
import InventoryFilters from "@/components/InventoryFilters";
import InventoryTable from "@/components/InventoryTable";
import TitlePages from "@/components/TitlePages";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import React from "react";

const page = async () => {
  const verifyCookies = await cookies();
  const token = verifyCookies.has("auth");
  if (!token) {
    redirect("/login");
  }
  return (
    <>
      <Header />
      <main className="w-full flex flex-col p-4 gap-4">
        <TitlePages
          title="Inventario de helados"
          href="/inventario/agregar"
          button="Agregar sabor"
        />

        <InventoryFilters />
        <InventoryTable />
      </main>
    </>
  );
};

export default page;
