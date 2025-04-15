import { SolarQuoteForm } from "./_components/SolarQuoteForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SolarQuoteForm />
      </main>
    </div>
  );
}
