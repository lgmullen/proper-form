import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./LineItem.module.css";

interface LineItemProps {
  name?: string; // Define type for optional styles
  handleClick: () => void;
}

export const LineItem: FunctionComponent<LineItemProps> = ({
  name,
  handleClick,
}) => {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "2rem",
      }}
    >
      <h3 className={styles.item} onClick={handleClick}>
        {name}
      </h3>
      <div className={styles.arrow}>
        <Image
          src="/arrow.svg"
          alt={"arrow"}
          height={30}
          width={180}
          style={{ marginLeft: "0.25rem" }}
        />
      </div>
    </span>
  );
};
