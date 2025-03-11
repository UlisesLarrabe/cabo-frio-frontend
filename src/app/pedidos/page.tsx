import Header from "@/components/Header";
import OrdersFilters from "@/components/OrdersFilters";
import TableOrders from "@/components/TableOrders";
import TitlePages from "@/components/TitlePages";

export default function Home() {
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
