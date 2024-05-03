import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

export const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Image
            src="/instagram.svg"
            alt={"instagram"}
            height={32}
            width={32}
            style={{ margin: "0.25rem" }}
          />
          <Image
            src="/linkedIn.svg"
            alt={"linkedIn"}
            height={32}
            width={32}
            style={{ margin: "0.25rem" }}
          />
          <Image
            src="/vimeo-tile.svg"
            alt={"vimeo"}
            height={32}
            width={32}
            style={{ margin: "0.25rem" }}
          />
        </div>
        <p></p>
        <p style={{ fontSize: "12px", color: "white" }}>alex@properform.co</p>
        <p style={{ fontSize: "12px", color: "white" }}>
          © 2024 Proper Form Productions LLC
        </p>
      </div>
    </div>
  );
};
