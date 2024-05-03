import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import styles from "./Modal.module.css";
import { HelloNavBar } from "../NavBar/HelloNavBar";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  toggleModal: Dispatch<SetStateAction<boolean>>;
}
export const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  toggleModal,
}) => {
  return (
    <div>
      {isOpen && (
        <div
          className={isOpen ? styles.modalOverlay : styles.modalOverlayClosing}
        >
          <HelloNavBar toggleModal={toggleModal} />
          <div className={styles.modal}>
            <div className={styles.wrapper}>
              <Link
                className={styles.gridItem}
                href={"https://www.instagram.com/"}
              >
                <h2 className={styles.underline}>Instagram</h2>
              </Link>
              <Link
                className={styles.gridItem}
                href={"https://www.linkedin.com/feed/"}
              >
                <h2 className={styles.underline}>LinkedIn</h2>
              </Link>
              <Link className={styles.gridItem} href={"https://vimeo.com/"}>
                <h2 className={styles.underline}>Vimeo</h2>
              </Link>

              <Link href={"/"} onClick={() => toggleModal(false)}>
                <h2 className={styles.underline}>Home</h2>
              </Link>
              <h2>Email: alex@properform.com</h2>
              <p style={{ gridColumn: "1 / span 3" }}>
                © 2024 Proper Form Productions LLC
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
