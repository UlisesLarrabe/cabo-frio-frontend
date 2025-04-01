import GoBackSection from "@/components/GoBackSection";
import Header from "@/components/Header";
import InitializeCash from "@/components/InitializeCash";
import { Toaster } from "sonner";

const page = () => {
  return (
    <>
      <Header />
      <Toaster />
      <main className="w-full flex flex-col p-4 gap-4">
        <GoBackSection href="/" title="Comienzo de caja" />

        <InitializeCash />
      </main>
    </>
  );
};
export default page;
