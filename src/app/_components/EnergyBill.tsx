import styles from "./components.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { QuoteFormData } from "./SolarQuoteForm";

interface Props {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

export const EnergyBill = ({ register, errors }: Props) => {
  return (
    <div className={styles.container}>
      <label>Average monthly energy bill</label>
      <input
        placeholder="Add number"
        type="number"
        {...register("calc.energyBill", {
          required: {
            value: true,
            message: "This field is required",
          },
          min: {
            value: 0,
            message: "Can't be less than 0",
          },
        })}
      />
      {errors.calc?.energyBill && (
        <span>{errors.calc?.energyBill.message}</span>
      )}
    </div>
  );
};
