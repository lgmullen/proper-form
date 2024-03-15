import { FunctionComponent } from "react";
import styles from "./NavBar.module.css";
import Router from "next/router";
import Link from "next/link";

interface NavBarProps {
  optionalStyles?: React.CSSProperties; // Define type for optional styles
}

const defaultStyles: React.CSSProperties = {
  // Your default style properties here
  display: "flex",
  flexDirection: "row",
  width: "100%",
  position: "fixed",
  height: "4rem",
  top: "0rem",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderBottom: `2px solid rgb(68, 144, 255)`,
  justifyContent: "space-between",
  alignItems: "center",
};

// Merge default styles with optional styles

export const RosterNavBar: FunctionComponent<NavBarProps> = ({
  optionalStyles,
}) => {
  const mergedStyles: React.CSSProperties = {
    ...defaultStyles,
    ...optionalStyles,
  };
  return (
    <div style={mergedStyles}>
      <Link href="/">
        <h3 className={styles.navButton}>Home</h3>
      </Link>
      <Link href="/hello">
        <h3 className={styles.navButton}>Hello</h3>
      </Link>
    </div>
  );
};
