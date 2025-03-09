"use client";
import { API_URL } from "@/consts/api_url";
import React, { createContext, useEffect, useState } from "react";

interface Movement {
  _id: string;
  type: "income" | "outcome";
  amount: number;
  createdAt: string;
  reason?: string;
  paymentMethod: "cash" | "mercado_pago" | "pedidos_ya";
}

interface MovementsContextType {
  movements: Movement[];
  setMovements: React.Dispatch<React.SetStateAction<Movement[]>>;
  getMovements: () => Promise<void>;
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

  useEffect(() => {
    getMovements();
  }, []);

  return (
    <movementsCocntext.Provider
      value={{ movements, setMovements, getMovements }}
    >
      {children}
    </movementsCocntext.Provider>
  );
}
