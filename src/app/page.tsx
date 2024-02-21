import { Climate_Crisis, Hachi_Maru_Pop, Nabla } from "next/font/google";
import { HomePage } from "../../components/HomePage/HomePage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ height: "100dvh" }}>
        <HomePage />
      </div>
    </main>
  );
}
