import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { MovementsProvider } from "@/context/MovementsContext";
import { OrdersProvider } from "@/context/OrdersContext";
import { FlavoursProvider } from "@/context/FlavoursContext";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabo Frío - Heladería",
  description: "Heladería Cabo Frío",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <OrdersProvider>
        <MovementsProvider>
          <FlavoursProvider>
            <body className={`${onest.variable} bg-snow `}>{children}</body>
          </FlavoursProvider>
        </MovementsProvider>
      </OrdersProvider>
    </html>
  );
}
