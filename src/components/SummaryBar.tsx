"use client";
import React, { useEffect, useState } from "react";
import ProgressInfo from "./ProgressInfo";
import { useMovementsContext } from "@/hooks/useMovementsContext";

export const SummaryBar = () => {
  const { movements } = useMovementsContext();
  const [cashPercentage, setCashPercentage] = useState(0);
  const [mercadoPagoPercentage, setMercadoPagoPercentage] = useState(0);
  const [pedidosYaPercentage, setPedidosYaPercentage] = useState(0);
  const [rappiPercentage, setRappiPercentage] = useState(0);

  useEffect(() => {
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
    const rappi = movements.filter(
      (movement) => movement.paymentMethod === "rappi"
    ).length;

    const cashPercentageEffect = Number(
      ((cash / mopvementsLength) * 100).toFixed(2)
    );
    const mercadoPagoPercentageEffect = Number(
      ((mercadoPago / mopvementsLength) * 100).toFixed(2)
    );
    const pedidosYaPercentageEffect = Number(
      ((pedidosYa / mopvementsLength) * 100).toFixed(2)
    );
    const rappiPercentageEffect = Number(
      ((rappi / mopvementsLength) * 100).toFixed(2)
    );
    setCashPercentage(cashPercentageEffect);
    setMercadoPagoPercentage(mercadoPagoPercentageEffect);
    setPedidosYaPercentage(pedidosYaPercentageEffect);
    setRappiPercentage(rappiPercentageEffect);
  }, [movements]);

  return (
    <article className="p-4 border border-gray-300 rounded-lg flex flex-col gap-6 md:w-1/2 ">
      <h3 className="text-xl font-bold ">
        Resumen de Ventas por Método de Pago
      </h3>

      <main className="flex flex-col gap-2">
        <ProgressInfo title="Efectivo" percentage={cashPercentage} />
        <ProgressInfo title="Mercado Pago" percentage={mercadoPagoPercentage} />
        <ProgressInfo title="Pedidos ya" percentage={pedidosYaPercentage} />
        <ProgressInfo title="Rappi" percentage={rappiPercentage} />
      </main>
    </article>
  );
};
