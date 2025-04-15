import styles from "./components.module.css";
import { useCalculator } from "@/hooks/useCalculator";
import { QuoteFormData } from "./SolarQuoteForm";
import { UseFormGetValues } from "react-hook-form";

interface Props {
  getValues: UseFormGetValues<QuoteFormData>;
}

export const MonthlySaving = ({ getValues }: Props) => {
  const { calc } = getValues();
  const sum = useCalculator(calc);

  return (
    <div className={styles.container}>
      <label>Your estimated monthly savings</label>
      <span>{sum}</span>
    </div>
  );
};
