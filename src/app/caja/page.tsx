import BoxFilters from "@/components/BoxFilters";
import Header from "@/components/Header";
import HeaderSection from "@/components/HeaderSection";
import MoneySummary from "@/components/MoneySummary";
import TableBox from "@/components/TableBox";

export default function Caja() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col p-4 gap-4">
        <HeaderSection />
        <MoneySummary />

        <section className="flex flex-col md:flex-row  gap-4 justify-center ">
          <BoxFilters />
          <TableBox />
        </section>
      </main>
    </>
  );
}
