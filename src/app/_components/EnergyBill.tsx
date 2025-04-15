import styles from "./components.module.css";

export const EnergyBill = () => {
  return (
    <div className={styles.container}>
      <label>Energy</label>
      <input id="energy" />
    </div>
  );
};
