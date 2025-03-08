import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col p-4 gap-4">
        <section className="flex justify-between">
          <h1 className="text-4xl font-bold ">Gestión de pedidos</h1>
          <Link
            href="/pedidos/crear"
            className="bg-eerie-black text-snow px-4 py-2 rounded-lg cursor-pointer"
          >
            Nuevo pedido
          </Link>
        </section>
      </main>
    </>
  );
}
