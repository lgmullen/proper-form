import Link from "next/link";
import { FunctionComponent, useState } from "react";
import HamburgerIcon from "../Icons/HamburgerIcon";
import styles from "./NavBar.module.css";
import { Modal } from "../Modal/Modal";

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

export const NavBar: FunctionComponent<NavBarProps> = ({ optionalStyles }) => {
  const mergedStyles: React.CSSProperties = {
    ...defaultStyles,
    ...optionalStyles,
  };
  const [isModalOpen, toggleModal] = useState(false);

  return (
    <>
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
        <HamburgerIcon
          height="48px"
          width="48px"
          className={styles.moduleButtonMobile}
          stroke="rgb(68, 144, 255)"
          style={{ cursor: "pointer" }}
          onClick={() => toggleModal(true)}
        />
      </div>
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
};
