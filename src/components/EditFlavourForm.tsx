"use client";
import { LOCALS } from "@/consts/locals";
import { useFlavoursContext } from "@/hooks/useFlavoursContext";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";
interface Flavour {
  _id?: number;
  name: string;
  stock: number;
  local: string;
}
const EditFlavourForm = ({ flavour }: { flavour: Flavour }) => {
  const [name, setName] = useState(flavour.name);
  const [stock, setStock] = useState(flavour.stock);
  const [local, setLocal] = useState(flavour.local);
  const [loading, setLoading] = useState(false);
  const isDisabled = loading || !name || !stock;
  const { updateFlavour } = useFlavoursContext();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    updateFlavour({ _id: flavour._id, name, stock, local })
      .then(() => {
        toast.success("Sabor actualizado correctamente");
      })
      .catch(() => {
        toast.error("Ocurrió un error al actualizar el sabor");
      });
    setLoading(false);
  };
  return (
    <section className="flex flex-col gap-4 justify-center items-center">
      <Toaster />
      <form className="flex flex-col gap-4 w-1/2 p-2 border border-eerie-black rounded-lg">
        <label className="flex flex-col gap-1">
          <span>Nombre</span>
          <input
            type="text"
            placeholder="Nombre del sabor"
            className="border border-eerie-black rounded-lg px-4 py-2"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label className="flex flex-col gap-1">
          <span>Stock</span>
          <input
            type="number"
            placeholder="Stock del sabor"
            className="border border-eerie-black rounded-lg px-4 py-2"
            onChange={(e) => setStock(Number(e.target.value))}
            value={stock}
            min={0}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Local</span>
          <select
            name="local"
            id="local"
            className="border border-eerie-black rounded-lg px-4 py-2"
            onChange={(e) => setLocal(e.target.value)}
            value={local}
          >
            {LOCALS.map((local) => (
              <option key={local} value={local}>
                {local}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="bg-eerie-black text-snow px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          {loading ? "Cargando..." : "Actualizar sabor"}
        </button>
      </form>
    </section>
  );
};

export default EditFlavourForm;
