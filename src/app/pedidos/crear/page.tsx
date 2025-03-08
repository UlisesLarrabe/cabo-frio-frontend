import FormOrders from "@/components/FormOrders";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col p-4 gap-4">
        <section className="flex gap-4">
          <Link
            href="/pedidos"
            className="text-eerie-black px-4 py-2 rounded-lg border border-eerie-black cursor-pointer font-bold"
          >
            {"<"}
          </Link>
          <h1 className="text-4xl font-bold">Nuevo pedido</h1>
        </section>
        <section className="flex justify-center items-center gap-4">
          <FormOrders />
        </section>
      </main>
    </>
  );
}
