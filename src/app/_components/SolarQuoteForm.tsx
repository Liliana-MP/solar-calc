"use client";
import { useState } from "react";
import { EnergyBill } from "./EnergyBill";
import { LeadForm } from "./LeadForm";
import { MonthlySaving } from "./MonthlySaving";
import { RoofSize } from "./RoofSize";

const steps = ["Energy bill", "Roof size", "Monthly savings", "Lead form"];

export const SolarQuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const back = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const next = () => {
    if (currentStep !== steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      <h1>SolarQuoteForm</h1>
      <form>
        <EnergyBill />
        <RoofSize />
        <MonthlySaving />
        <LeadForm />
      </form>
      <button disabled={currentStep === 0} onClick={() => back()}>
        back
      </button>
      <button onClick={() => next()}>forw</button>
    </div>
  );
};
