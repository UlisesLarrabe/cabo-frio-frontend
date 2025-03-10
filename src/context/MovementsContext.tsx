"use client";
import { API_URL } from "@/consts/api_url";
import dayjs from "dayjs";
import React, { createContext, useEffect, useState } from "react";

interface Movement {
  _id?: string;
  type: "income" | "outcome";
  amount: number;
  createdAt: string | dayjs.Dayjs;
  reason?: string;
  paymentMethod: "cash" | "mercado_pago" | "pedidos_ya";
  local: string;
}

interface MovementsContextType {
  movements: Movement[];
  setMovements: React.Dispatch<React.SetStateAction<Movement[]>>;
  getMovements: () => Promise<void>;
  getMovementsWithFilters: (
    date: string,
    local: string,
    type: string,
    paymentMethod: string
  ) => Promise<void>;
  postMovement: (movement: Movement) => Promise<void>;
}

export const movementsCocntext = createContext<
  MovementsContextType | undefined
>(undefined);

export function MovementsProvider({ children }: { children: React.ReactNode }) {
  const [movements, setMovements] = useState<Movement[]>([]);

  const getMovements = async () => {
    const response = await fetch(`${API_URL}/movements`);
    const data = await response.json();
    setMovements(data);
  };

  const getMovementsWithFilters = async (
    date: string,
    local: string,
    type: string,
    paymentMethod: string
  ) => {
    const response = await fetch(
      `${API_URL}/movements/filters?date=${date}&local=${local}&type=${type}&paymentMethod=${paymentMethod}`
    );
    const data = await response.json();
    setMovements(data);
  };

  const postMovement = async (movement: Movement) => {
    const response = await fetch(`${API_URL}/movements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movement),
    });
    const data = await response.json();
    setMovements([...movements, data.movement]);
  };

  useEffect(() => {
    getMovements();
  }, []);

  return (
    <movementsCocntext.Provider
      value={{
        movements,
        setMovements,
        getMovements,
        getMovementsWithFilters,
        postMovement,
      }}
    >
      {children}
    </movementsCocntext.Provider>
  );
}
