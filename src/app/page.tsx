import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const verifyCookies = await cookies();
  const token = verifyCookies.get("auth");
  if (!token) {
    redirect("/login");
  }

  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}
