"use client";
import { Footer } from "../../../components/Footer/Footer";
import { RosterNavBar } from "../../../components/NavBar/RosterNavBar";
import styles from "./roster.module.css";

export default function Roster() {
  return (
    <main>
      <div style={{ height: "100dvh" }}>
        <RosterNavBar
          optionalStyles={{
            color: "black",
            backgroundColor: "rgba(0, 0, 0)",
          }}
        />
        <div className={styles.pageContainer}>
          <div className={styles.rosterContainer}>
            <p>
              <span className={styles.rosterItem}>Alex Holmes</span>,{" "}
              <span className={styles.rosterItem}>Cyrus Stowe</span>,{" "}
              <span className={styles.rosterItem}>John Tanner</span> &{" "}
              <span className={styles.rosterItem}>Bobby Rodgers.</span>
            </p>
          </div>
        </div>
        <div style={{ background: "brown", height: "12rem" }}></div>
        <Footer />
      </div>
    </main>
  );
}
