"use client";
import React from "react";
import ProgressInfo from "./ProgressInfo";
import { useMovementsContext } from "@/hooks/useMovementsContext";

export const SummaryBar = () => {
  const { movements } = useMovementsContext();

  const mopvementsLength = movements.length === 0 ? 1 : movements.length;

  const cash = movements.filter(
    (movement) => movement.paymentMethod === "cash"
  ).length;
  const mercadoPago = movements.filter(
    (movement) => movement.paymentMethod === "mercado_pago"
  ).length;
  const pedidosYa = movements.filter(
    (movement) => movement.paymentMethod === "pedidos_ya"
  ).length;

  const cashPercentage = (cash / mopvementsLength) * 100;
  const mercadoPagoPercentage = (mercadoPago / mopvementsLength) * 100;
  const pedidosYaPercentage = (pedidosYa / mopvementsLength) * 100;

  return (
    <article className="p-4 border border-gray-300 rounded-lg flex flex-col gap-2 w-1/2 ">
      <h3 className="text-xl font-bold ">
        Resumen de Ventas por Método de Pago
      </h3>
      <ProgressInfo title="Efectivo" percentage={cashPercentage} />
      <ProgressInfo title="Mercado Pago" percentage={mercadoPagoPercentage} />
      <ProgressInfo title="Pedidos ya" percentage={pedidosYaPercentage} />
    </article>
  );
};
