"use client";
import { useMovementsContext } from "@/hooks/useMovementsContext";
import React from "react";
import SummaryArticle from "./SummaryArticle";
import CashIcon from "@/icons/CashIcon";
import DeliveryIcon from "@/icons/DeliveryIcon";
import MercadoPagoIcon from "@/icons/MercadoPagoIcon";
import ReceiptIcon from "@/icons/ReceiptIcon";
import RappiIcon from "@/icons/RappiIcon";

const HeroSummary = () => {
  const { allMovements: movements } = useMovementsContext();
  const total_out = movements
    .filter((movement) => movement.type === "outcome")
    .reduce((acc, movement) => acc + movement.amount, 0);
  const total_in = movements
    .filter((movement) => movement.type === "income")
    .reduce((acc, movement) => acc + movement.amount, 0);
  const pedidosYaQuantity = movements.filter(
    (movement) => movement.paymentMethod === "pedidos_ya"
  ).length;
  const mercadopagoQuantity = movements.filter(
    (movement) => movement.paymentMethod === "mercado_pago"
  ).length;
  const cashQuantity = movements.filter(
    (movement) =>
      movement.paymentMethod === "cash" && movement.type === "income"
  ).length;
  const rappiQuantity = movements.filter(
    (movement) => movement.paymentMethod === "rappi"
  ).length;

  return (
    <section className="flex flex-col md:flex-row w-full min-h-28 gap-4">
      <SummaryArticle
        title="Ganancias totales"
        price={total_in}
        info={`Después de retiros $${total_in - total_out}`}
      >
        <ReceiptIcon />
      </SummaryArticle>
      <SummaryArticle
        title="Ventas totales con Rappi"
        price={rappiQuantity}
        isNotPrice={true}
      >
        <RappiIcon />
      </SummaryArticle>
      <SummaryArticle
        title="Ventas totales con Pedidos Ya"
        price={pedidosYaQuantity}
        isNotPrice={true}
      >
        <DeliveryIcon />
      </SummaryArticle>
      <SummaryArticle
        title="Ventas totales con Mercado Pago"
        price={mercadopagoQuantity}
        isNotPrice={true}
      >
        <MercadoPagoIcon />
      </SummaryArticle>
      <SummaryArticle
        title="Ventas totales en efectivo"
        price={cashQuantity}
        isNotPrice={true}
      >
        <CashIcon />
      </SummaryArticle>
    </section>
  );
};

export default HeroSummary;
