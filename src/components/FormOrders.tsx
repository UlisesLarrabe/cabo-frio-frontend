"use client";
import { LOCALS } from "@/consts/locals";
import { useOrdersContext } from "@/hooks/useOrdersContext";
import React, { useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Toaster, toast } from "sonner";
import { useMovementsContext } from "@/hooks/useMovementsContext";
import PlusIcon from "@/icons/PlusIcon";

interface DescriptionProduct {
  item: string;
  quantity: number;
  type: string;
}

const FormOrders = () => {
  const options = [
    { placeholder: "Efectivo", value: "cash" },
    { placeholder: "Mercado Pago", value: "mercado_pago" },
    { placeholder: "Pedidos Ya", value: "pedidos_ya" },
    { placeholder: "Rappi", value: "rappi" },
  ];

  const productOptions = [
    { value: "Helado", unit: "kilo" },
    { value: "Salsa grande", unit: "unidades" },
    { value: "Salsa chica", unit: "unidades" },
    { value: "Pote de litro", unit: "3 litros" },
    { value: "Bocheros", unit: "unidades" },
    { value: "Almendrado", unit: "unidades" },
    { value: "Térmicos", unit: "kilo" },
    { value: "Cucurucho dulce", unit: "unidades" },
    { value: "Cucuruchon", unit: "unidades" },
    { value: "Tacita", unit: "unidades" },
    { value: "Rocklets", unit: "unidades" },
  ];

  const [local, setLocal] = useState(LOCALS[0]);
  const [totalPrice, setTotalPrice] = useState<number | null>(0);
  const [paymentMethod, setPaymentMethod] = useState(options[0].value);
  const [description, setDescription] = useState<DescriptionProduct[]>([]);
  const [product, setProduct] = useState(productOptions[0].value);
  const [quantity, setQuantity] = useState(1);
  const [unitType, setUnitType] = useState(productOptions[0].unit);
  const { addOrder, setOrders, getOrders } = useOrdersContext();
  const { getMovements } = useMovementsContext();
  const [loading, setLoading] = useState(false);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    setDescription([
      ...description,
      { item: product, quantity, type: unitType },
    ]);
    setProduct(productOptions[0].value);
    setQuantity(1);
    setUnitType(productOptions[0].unit);
  };

  const isDisabled =
    description.length === 0 ||
    totalPrice === null ||
    loading ||
    totalPrice === 0;

  dayjs.extend(utc);
  dayjs.extend(timezone);

  const handleSubmit = async (e: React.FormEvent) => {
    const nowInBuenosAires = dayjs().tz("America/Argentina/Buenos_Aires");

    e.preventDefault();
    const order = {
      local,
      totalPrice: Number(totalPrice),
      paymentMethod: paymentMethod as
        | "cash"
        | "mercado_pago"
        | "pedidos_ya"
        | "rappi",
      description,
      createdAt: nowInBuenosAires,
    };
    setLoading(true);
    addOrder(order).then((response) => {
      if (response.ok) {
        toast.success("Pedido guardado correctamente");
        setDescription([]);
        setTotalPrice(0);
        setLocal(LOCALS[0]);
        setPaymentMethod(options[0].value);
        setProduct(productOptions[0].value);
        setQuantity(1);
        setUnitType(productOptions[0].unit);
      } else {
        toast.error("Error al guardar el pedido");
      }
      response.json().then((data) => {
        setOrders((prev) => [...prev, data.order]);
      });

      setLoading(false);
    });
    await getOrders();
    await getMovements();
  };

  return (
    <form className="flex flex-col gap-4 w-3/4 max-w-[1200px] border p-4 rounded-lg border-eerie-black">
      <Toaster />
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold">Información del Pedido</h2>
        <p>Complete el formulario para registrar un nuevo pedido</p>
      </div>

      <div className="flex gap-4 w-full">
        <div className="flex flex-col gap-4 w-1/2">
          <label htmlFor="cliente" className="font-semibold text-xl">
            Local
          </label>
          <select
            id="local"
            name="local"
            className="p-2 border border-gray-300 rounded-lg"
            onChange={(e) => setLocal(e.target.value)}
          >
            {LOCALS.map((local) => (
              <option key={local} value={local}>
                {local}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2  w-1/2">
          <span className="font-semibold text-xl">Método de pago</span>
          {options.map((option) => (
            <label key={option.value} className="flex gap-2  items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === option.value}
                value={option.value}
              />
              {option.placeholder}
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">Productos</h2>
          <button
            className="text-eerie-black px-4 py-2 rounded-lg border border-eerie-black cursor-pointer hover:bg-eerie-black hover:text-snow flex gap-2"
            onClick={handleAddProduct}
          >
            <PlusIcon />
            Agregar producto
          </button>
        </div>
        <div className="flex gap-2 w-full">
          <div className="w-1/3 flex flex-col gap-2">
            <label>Producto</label>
            <select
              className="p-2 border border-gray-300 rounded-lg"
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
                const selectedProduct = productOptions.find(
                  (p) => p.value === e.target.value
                );
                if (selectedProduct) {
                  setUnitType(selectedProduct.unit);
                  setQuantity(1);
                }
              }}
            >
              {productOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/3 flex flex-col gap-2">
            <label>Cantidad</label>
            <input
              type="number"
              placeholder="1"
              className="p-2 border border-gray-300 rounded-lg"
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={quantity}
              step={1}
            />
          </div>
          <div className="w-1/3 flex flex-col gap-2">
            <label>Tipo de unidad</label>
            <select
              className="p-2 border border-gray-300 rounded-lg"
              value={unitType}
              onChange={(e) => setUnitType(e.target.value)}
            >
              <option value="kilo">kilo</option>
              <option value="medio kilo">medio kilo</option>
              <option value="un cuarto">un cuarto</option>
              <option value="unidades">unidades</option>
              <option value="3 litros">3 litros</option>
              <option value="5 litros">5 litros</option>
              <option value="10 litros">10 litros</option>
            </select>
          </div>
        </div>
        {description.length > 0 &&
          description.map((product, index) => (
            <div key={index} className="flex gap-2 ">
              <span className="p-2  rounded-lg w-1/3">{product.item}</span>
              <span className="p-2 rounded-lg w-1/3">{product.quantity}</span>
              <span className="p-2 rounded-lg w-1/3">{product.type}</span>
            </div>
          ))}
      </div>
      <label>Total</label>
      <input
        type="number"
        className="p-2 border border-gray-300 rounded-lg"
        onChange={(e) =>
          setTotalPrice(e.target.value === "" ? null : Number(e.target.value))
        }
        min={0}
        step={0.1}
        value={totalPrice === null ? "" : totalPrice}
      />

      <button
        type="submit"
        className="bg-eerie-black text-snow px-4 py-2 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        {loading ? "Guardando pedido..." : "Guardar"}
      </button>
    </form>
  );
};

export default FormOrders;
