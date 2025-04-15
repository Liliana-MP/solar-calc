import styles from "./components.module.css";

export const LeadForm = () => {
  return (
    <div className={styles.container}>
      <label>Name</label>
      <input />
      <label>Email</label>
      <input />
      <label>Phone number</label>
      <input />
      <label>Postal code</label>
      <input />
    </div>
  );
};
