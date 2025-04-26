import React from "react";
import TitlePages from "./TitlePages";
import MonthSummary from "./MonthSummary";

const ResumeProtectedContent = () => (
  <>
    <TitlePages title="Resumen del mes" href="/" button="Volver al inicio" />
    <MonthSummary />
  </>
);

export default ResumeProtectedContent;
