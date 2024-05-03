import Link from "next/link";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import IconClose from "../Icons/IconClose";
import styles from "./NavBar.module.css";

interface NavBarProps {
  optionalStyles?: React.CSSProperties; // Define type for optional styles
  toggleModal?: Dispatch<SetStateAction<boolean>>;
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
  toggleModal,
}) => {
  const mergedStyles: React.CSSProperties = {
    ...defaultStyles,
    ...optionalStyles,
  };

  return (
    <div style={mergedStyles}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link href="/roster">
          <h3 className={styles.navButton}>Roster</h3>
        </Link>
        <Link href="/hello">
          <h3 className={styles.navButton}>Hello</h3>
        </Link>
      </div>
      <p style={{ color: "white" }}> Proper Form Logo here</p>
      <IconClose
        height="48px"
        width="48px"
        className={styles.moduleButtonMobile}
        stroke="rgb(68, 144, 255)"
        style={{ cursor: "pointer" }}
        onClick={() => toggleModal && toggleModal(false)}
      />
    </div>
  );
};
