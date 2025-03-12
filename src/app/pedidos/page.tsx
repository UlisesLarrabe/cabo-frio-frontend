import Header from "@/components/Header";
import OrdersFilters from "@/components/OrdersFilters";
import TableOrders from "@/components/TableOrders";
import TitlePages from "@/components/TitlePages";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
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
          title="Gestión de pedidos"
          href="/pedidos/crear"
          button="Nuevo pedido"
        />

        <OrdersFilters />
        <section>
          <TableOrders />
        </section>
      </main>
    </>
  );
}
