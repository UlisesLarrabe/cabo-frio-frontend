"use client";
import React, { useEffect, useState } from "react";
import SummaryArticle from "./SummaryArticle";
import { useMovementsContext } from "@/hooks/useMovementsContext";

const MoneySummary = () => {
  const { movements } = useMovementsContext();
  const [cash, setCash] = useState(0);
  const [mercado_pago, setMercado_pago] = useState(0);
  const [pedidos_ya, setPedidos_ya] = useState(0);
  const [total_out, setTotal_out] = useState(0);
  const [total_in, setTotal_in] = useState(0);
  useEffect(() => {
    const cash = movements
      .filter(
        (movement) =>
          movement.type === "income" && movement.paymentMethod === "cash"
      )
      .reduce((acc, movement) => acc + movement.amount, 0);
    const mercado_pago = movements
      .filter(
        (movement) =>
          movement.type === "income" &&
          movement.paymentMethod === "mercado_pago"
      )
      .reduce((acc, movement) => acc + movement.amount, 0);
    const pedidos_ya = movements
      .filter(
        (movement) =>
          movement.type === "income" && movement.paymentMethod === "pedidos_ya"
      )
      .reduce((acc, movement) => acc + movement.amount, 0);
    const total_out = movements
      .filter((movement) => movement.type === "outcome")
      .reduce((acc, movement) => acc + movement.amount, 0);
    const total_in = movements
      .filter((movement) => movement.type === "income")
      .reduce((acc, movement) => acc + movement.amount, 0);
    setCash(cash);
    setMercado_pago(mercado_pago);
    setPedidos_ya(pedidos_ya);
    setTotal_out(total_out);
    setTotal_in(total_in);
  }, [movements]);

  console.log(cash, mercado_pago, pedidos_ya, total_out, total_in);

  return (
    <section className="flex w-full gap-4">
      <SummaryArticle
        title="Efectivo"
        price={cash}
        info={`Despues de retiro: $${cash - total_out}`}
      />
      <SummaryArticle title="Mercado Pago" price={mercado_pago} />
      <SummaryArticle title="Pedidos Ya" price={pedidos_ya} />
      <SummaryArticle
        title="Total Ingresos"
        price={total_in}
        info={`Total después de retiros: $${total_in - total_out}`}
      />
    </section>
  );
};

export default MoneySummary;
