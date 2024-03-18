import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./NavBar.module.css";

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
  zIndex: 1,
};

// Merge default styles with optional styles

export const HelloNavBar: FunctionComponent<NavBarProps> = ({
  optionalStyles,
}) => {
  const mergedStyles: React.CSSProperties = {
    ...defaultStyles,
    ...optionalStyles,
  };
  return (
    <div style={mergedStyles}>
      <Link href="/roster">
        <h3 className={styles.navButton}>Roster</h3>
      </Link>
      <Link href="/">
        <h3 className={styles.navButton}>Home</h3>
      </Link>
    </div>
  );
};
