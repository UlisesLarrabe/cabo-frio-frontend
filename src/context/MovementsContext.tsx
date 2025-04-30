"use client";
import { API_URL } from "@/consts/api_url";
import { Client } from "@/consts/clients";
import { payments } from "@/consts/paymentsOptions";
import dayjs from "dayjs";
import React, { createContext, useEffect, useState } from "react";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

interface Movement {
  _id?: string;
  type: "income" | "outcome";
  amount: number;
  createdAt: string | dayjs.Dayjs;
  reason?: string;
  paymentMethod: payments;
  local: string;
  client: Client;
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
  allMovements: Movement[];
  getMonthMovements: (month: string, local: string) => Promise<void>;
  monthMovements: Movement[];
}

export const movementsCocntext = createContext<
  MovementsContextType | undefined
>(undefined);

export function MovementsProvider({ children }: { children: React.ReactNode }) {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [allMovements, setAllMovements] = useState<Movement[]>([]);
  const [monthMovements, setMonthMovements] = useState<Movement[]>([]);

  const getMovements = async () => {
    const today = dayjs()
      .add(1, "day")
      .tz("America/Argentina/Buenos_Aires")
      .format("YYYY-MM-DD");
    const response = await fetch(`${API_URL}/movements/filters?date=${today}`);
    const data = await response.json();
    setMovements(data);
    setAllMovements(data);
  };

  const getMonthMovements = async (month: string, local: string) => {
    const response = await fetch(`${API_URL}/movements/month/${month}`);
    const data = await response.json();
    if (data.length === 0) {
      setMonthMovements([]);
      return;
    }
    if (local === "all") {
      setMonthMovements(data);
    } else {
      const filteredData = data.filter(
        (movement: Movement) => movement.local === local
      );
      setMonthMovements(filteredData);
    }
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
        allMovements,
        getMonthMovements,
        monthMovements,
      }}
    >
      {children}
    </movementsCocntext.Provider>
  );
}
