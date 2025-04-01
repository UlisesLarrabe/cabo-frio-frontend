import React from "react";
import HeroSummary from "./HeroSummary";
import { AdditionalInfo } from "./AdditionalInfo";
import TitlePages from "./TitlePages";

const Hero = () => {
  return (
    <main className="w-full flex flex-col p-4 gap-4">
      <TitlePages
        title="Dashboard"
        href="/caja/comienzo"
        button="Agregar comienzo de caja"
      />
      <HeroSummary />
      <AdditionalInfo />
    </main>
  );
};

export default Hero;
