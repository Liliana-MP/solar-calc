"use client";
import styles from "./components.module.css";
import { useState } from "react";
import { EnergyBill } from "./EnergyBill";
import { LeadForm } from "./LeadForm";
import { MonthlySaving } from "./MonthlySaving";
import { RoofSize } from "./RoofSize";
import { useForm } from "react-hook-form";
import { Lead, QuoteCalc } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = ["Energy bill", "Roof size", "Monthly savings", "Lead form"];

export type QuoteFormData = {
  calc: QuoteCalc;
  lead: Lead;
};

export const SolarQuoteForm = () => {
  const {
    register,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm<QuoteFormData>({ mode: "all" });
  const [currentStep, setCurrentStep] = useState(0);
  const back = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const next = () => {
    if (currentStep !== steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  console.log(watch("calc")); // watch input value by passing the name of it

  return (
    <div>
      <h1>Solar Quote Calculator</h1>
      <form className={styles.formContainer} onSubmit={() => handleSubmit()}>
        {currentStep === 0 && (
          <EnergyBill register={register} errors={errors} />
        )}
        {currentStep === 1 && <RoofSize register={register} errors={errors} />}
        {currentStep === 2 && <MonthlySaving getValues={getValues} />}
        {currentStep === 3 && <LeadForm />}
      </form>
      <div className={styles.buttonContainer}>
        <button disabled={currentStep === 0} onClick={() => back()}>
          <ChevronLeft />
        </button>
        <button disabled={!isValid} onClick={() => next()}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
