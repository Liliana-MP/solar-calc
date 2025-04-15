import { QuoteCalc } from "@/types";

export const useCalculator = (data: QuoteCalc) => {
  if (data.roofSize === "Small") {
    return "Small";
  } else if (data.roofSize === "Medium") {
    return "Medium";
  } else if (data.roofSize === "Large") {
    return "Large";
  }

  return "Saving a lot of $$$";
};
