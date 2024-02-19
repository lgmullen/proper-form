import { FunctionComponent } from "react";
import styles from "./NavBar.module.css";

export const NavBar: FunctionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        position: "fixed",
        height: "4rem",
        top: "0rem",
        backgroundColor: "black",
        borderBottom: `2px solid rgb(68, 144, 255)`,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 className={styles.navButton}>Roster</h3>
      <h3 className={styles.navButton}>Team</h3>
      <h3 className={styles.navButton}>About</h3>
    </div>
  );
};
