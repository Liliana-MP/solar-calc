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
      <label>energy</label>
      <input {...register("calc.energyBill", { required: true })} />
      {errors.calc?.energyBill && <span>This field is required</span>}
    </div>
  );
};
