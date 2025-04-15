import { SolarQuoteForm } from "./_components/SolarQuoteForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>hello</h1>
        <SolarQuoteForm />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
