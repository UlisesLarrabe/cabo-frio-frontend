import React from "react";

const Hero = () => {
  return (
    <main className="w-full flex flex-col p-4 gap-4">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <section className="flex gap-4">
        <article className="p-2 border flex justify-center  flex-col border-gray-300 rounded-lg min-w-3xs min-h-32">
          <h2 className="text-gray-600">Ventas totales</h2>
          <p className="font-bold text-3xl">$1000</p>
        </article>
      </section>
    </main>
  );
};

export default Hero;
