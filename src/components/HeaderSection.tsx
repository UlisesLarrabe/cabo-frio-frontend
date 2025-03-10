import Link from "next/link";
import React from "react";

const HeaderSection = () => {
  return (
    <section className="flex justify-between">
      <h1 className="font-bold text-4xl">Arqueo de caja</h1>
      <div className="flex gap-2">
        <button className="text-eerie-black px-4 py-2 rounded-lg border border-eerie-black cursor-pointer">
          Realizar Arqueo
        </button>
        <Link
          href="/caja/retiro"
          className="bg-eerie-black text-white px-4 py-2 rounded-lg cursor-pointer"
        >
          Registrar retiro
        </Link>
      </div>
    </section>
  );
};

export default HeaderSection;
