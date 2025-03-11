import BoxFilters from "@/components/BoxFilters";
import Header from "@/components/Header";
import MoneySummary from "@/components/MoneySummary";
import TableBox from "@/components/TableBox";
import TitlePages from "@/components/TitlePages";

export default function Caja() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col p-4 gap-4">
        <TitlePages
          title="Arqueo de caja"
          href="/caja/retiro"
          button="Registrar retiro"
        />
        <MoneySummary />

        <section className="flex flex-col md:flex-row  gap-4 justify-center ">
          <BoxFilters />
          <TableBox />
        </section>
      </main>
    </>
  );
}
