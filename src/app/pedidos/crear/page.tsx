import FormOrders from "@/components/FormOrders";
import GoBackSection from "@/components/GoBackSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col p-4 gap-4">
        <GoBackSection href="/pedidos" title="Nuevo pedido" />

        <section className="flex justify-center items-center gap-4">
          <FormOrders />
        </section>
      </main>
    </>
  );
}
