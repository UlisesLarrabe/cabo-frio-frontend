"use client";
import { API_URL } from "@/consts/api_url";
import { createContext, useEffect, useState } from "react";

interface Flavour {
  _id?: number;
  name: string;
  stock: number;
  local: string;
}

interface FlavourContext {
  flavours: Flavour[];
  setFlavours: React.Dispatch<React.SetStateAction<Flavour[]>>;
  addFlavour: (flavour: Flavour) => Promise<void>;
  getWithFilters: (filters: { local: string }) => Promise<void>;
}

export const flavoursContext = createContext<FlavourContext | null>(null);

export function FlavoursProvider({ children }: { children: React.ReactNode }) {
  const [flavours, setFlavours] = useState<Flavour[]>([]);

  const getFlavours = async () => {
    const response = await fetch(`${API_URL}/flavours`);
    const data = await response.json();
    setFlavours(data);
  };

  useEffect(() => {
    getFlavours();
  }, []);

  const addFlavour = async (flavour: Flavour) => {
    const response = await fetch(`${API_URL}/flavours`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flavour),
    });
    const data = await response.json();
    setFlavours([...flavours, data.flavour]);
    await getFlavours();
  };

  const getWithFilters = async (filters: { local: string }) => {
    const response = await fetch(
      `${API_URL}/flavours/filters?local=${filters.local}`
    );
    const data = await response.json();
    setFlavours(data);
  };

  return (
    <flavoursContext.Provider
      value={{ flavours, setFlavours, addFlavour, getWithFilters }}
    >
      {children}
    </flavoursContext.Provider>
  );
}
