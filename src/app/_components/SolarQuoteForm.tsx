"use client";
import { useState } from "react";
import { EnergyBill } from "./EnergyBill";
import { LeadForm } from "./LeadForm";
import { MonthlySaving } from "./MonthlySaving";
import { RoofSize } from "./RoofSize";
import { useForm } from "react-hook-form";
import { Lead, QuoteCalc } from "@/types";

const steps = ["Energy bill", "Roof size", "Monthly savings", "Lead form"];

export type QuoteFormData = {
  calc: QuoteCalc;
  lead: Lead;
};

export const SolarQuoteForm = () => {
  const {
    register,
    watch,
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
      <h1>SolarQuoteForm</h1>
      <form onSubmit={() => handleSubmit()}>
        {currentStep === 0 && (
          <>
            <label>energy</label>
            <input {...register("calc.energyBill", { required: true })} />
            {errors.calc?.energyBill && <span>This field is required</span>}
          </>
        )}
        {currentStep === 1 && <RoofSize register={register} errors={errors} />}
        {currentStep === 2 && <MonthlySaving />}
        {currentStep === 3 && <LeadForm />}
      </form>
      <button disabled={currentStep === 0} onClick={() => back()}>
        back
      </button>
      <button disabled={!isValid} onClick={() => next()}>
        forw
      </button>
    </div>
  );
};
