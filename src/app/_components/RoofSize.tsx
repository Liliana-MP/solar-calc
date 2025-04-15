import styles from "./components.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { QuoteFormData } from "./SolarQuoteForm";

interface Props {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

const roofSizes = ["Small", "Medium", "Large"];

export const RoofSize = ({ register, errors }: Props) => {
  return (
    <>
      <label>Choose your approximate roof size</label>
      <div className={styles.container}>
        {roofSizes.map((size) => (
          <label key={size}>
            <input
              {...register("calc.roofSize", { required: true })}
              type="radio"
              value={size}
              id={size}
            />
            {size}
          </label>
        ))}
      </div>
      {errors.calc?.energyBill && <span>This field is required</span>}
    </>
  );
};
