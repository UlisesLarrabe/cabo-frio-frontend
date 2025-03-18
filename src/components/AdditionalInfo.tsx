import React from "react";
import { SummaryBar } from "./SummaryBar";
import { Shortcuts } from "./Shortcuts";

export const AdditionalInfo = () => {
  return (
    <section className="flex gap-2 w-full md:flex-row flex-col">
      <SummaryBar />
      <Shortcuts />
    </section>
  );
};
