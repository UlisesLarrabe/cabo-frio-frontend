import React from "react";
import HeroSummary from "./HeroSummary";
import { AdditionalInfo } from "./AdditionalInfo";

const Hero = () => {
  return (
    <main className="w-full flex flex-col p-4 gap-4">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <HeroSummary />
      <AdditionalInfo />
    </main>
  );
};

export default Hero;
