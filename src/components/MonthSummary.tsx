"use client";

import { useMovementsContext } from "@/hooks/useMovementsContext";
import { useEffect, useState } from "react";
import SummaryArticle from "./SummaryArticle";
import CashIcon from "@/icons/CashIcon";
import CardIcon from "@/icons/CardIcon";
import MercadoPagoIcon from "@/icons/MercadoPagoIcon";
import ReceiptIcon from "@/icons/ReceiptIcon";

const MonthSummary = () => {
  const { monthMovements } = useMovementsContext();
  const [total_cash, setTotal_cash] = useState(0);
  const [total_card, setTotal_card] = useState(0);
  const [total_mp, setTotal_mp] = useState(0);
  const [total_income, setTotal_income] = useState(0);

  useEffect(() => {
    const TOTAL_CASH = monthMovements
      .filter(
        (movement) =>
          movement.type === "income" &&
          movement.paymentMethod != "card" &&
          movement.paymentMethod != "mercado_pago"
      )
      .reduce((acc, movement) => acc + movement.amount, 0);
    const TOTAL_CARD = monthMovements
      .filter(
        (movement) =>
          movement.type === "income" && movement.paymentMethod === "card"
      )
      .reduce((acc, movement) => acc + movement.amount, 0);

    const TOTAL_MP = monthMovements
      .filter(
        (movement) =>
          movement.type === "income" &&
          movement.paymentMethod === "mercado_pago"
      )
      .reduce((acc, movement) => acc + movement.amount, 0);

    const TOTAL_INCOME = TOTAL_CASH + TOTAL_CARD + TOTAL_MP;
    setTotal_cash(TOTAL_CASH);
    setTotal_card(TOTAL_CARD);
    setTotal_mp(TOTAL_MP);
    setTotal_income(TOTAL_INCOME);
  }, [monthMovements]);

  return (
    <section className="flex flex-col md:flex-row w-full gap-6 justify-center items-center">
      <SummaryArticle title="Efectivo" price={total_cash}>
        <CashIcon />
      </SummaryArticle>
      <SummaryArticle title="Tarjeta" price={total_card}>
        <CardIcon />
      </SummaryArticle>
      <SummaryArticle title="Mercado Pago" price={total_mp}>
        <MercadoPagoIcon />
      </SummaryArticle>
      <SummaryArticle title="Total" price={total_income}>
        <ReceiptIcon />
      </SummaryArticle>
    </section>
  );
};
export default MonthSummary;
