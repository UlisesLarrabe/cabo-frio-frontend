import Header from "@/components/Header";
import HeaderSection from "@/components/HeaderSection";
import TableBox from "@/components/TableBox";

export default function Caja() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col p-4 gap-4">
        <HeaderSection />
        <section>
          <TableBox />
        </section>
      </main>
    </>
  );
}
