"use client";
import { useMovementsContext } from "@/hooks/useMovementsContext";
import {
  BarLabel,
  BarPlot,
  ChartContainer,
  ChartsXAxis,
  ChartsYAxis,
} from "@mui/x-charts";
import { useState, useEffect } from "react";

const ChartResume = () => {
  const { monthMovements: movements } = useMovementsContext();
  const [cashPercentage, setCashPercentage] = useState(0);
  const [mercadoPagoPercentage, setMercadoPagoPercentage] = useState(0);
  const [cardPercentage, setCardPercentage] = useState(0);

  useEffect(() => {
    const movementsLength = movements.length === 0 ? 1 : movements.length;

    const cash = movements.filter(
      (movement) => movement.paymentMethod === "cash"
    ).length;
    const mercadoPago = movements.filter(
      (movement) => movement.paymentMethod === "mercado_pago"
    ).length;

    const cashPercentageEffect = Number(
      ((cash / movementsLength) * 100).toFixed(1)
    );
    const mercadoPagoPercentageEffect = Number(
      ((mercadoPago / movementsLength) * 100).toFixed(1)
    );

    const card = movements.filter(
      (movement) => movement.paymentMethod === "card"
    ).length;
    const cardPercentageEffect = Number(
      ((card / movementsLength) * 100).toFixed(1)
    );

    setCashPercentage(cashPercentageEffect);
    setMercadoPagoPercentage(mercadoPagoPercentageEffect);
    setCardPercentage(cardPercentageEffect);
  }, [movements]);

  return (
    <article className="p-4 border border-gray-300 rounded-lg flex flex-col gap-4 w-full md:w-1/2 bg-white shadow">
      <h3 className="text-xl font-bold mb-2 text-eerie-black">
        Resumen por método de pago
      </h3>
      <section className="flex items-center justify-center">
        <ChartContainer
          xAxis={[
            {
              scaleType: "band",
              data: ["Efectivo", "Tarjeta", "Mercado Pago"],
            },
          ]}
          series={[
            {
              type: "bar",
              id: "base",
              data: [cashPercentage, cardPercentage, mercadoPagoPercentage],
              color: "#fcc8b2",
            },
          ]}
          width={300}
          height={400}
        >
          <BarPlot barLabel="value" slots={{ barLabel: BarLabel }} />
          <ChartsXAxis
            fill="#22223b"
            labelStyle={{ fontSize: 12, fontWeight: 500 }}
          />
          <ChartsYAxis
            fill="#22223b"
            labelStyle={{ fontSize: 12, fontWeight: 500 }}
          />
        </ChartContainer>
      </section>
    </article>
  );
};

export default ChartResume;
