import { FunctionComponent } from "react";
import styles from "./VideoSelector.module.css";

interface VideoSelectorProps {
  setActive: (activeId: number) => void;
  active: number;
}

export const VideoSelector: FunctionComponent<VideoSelectorProps> = ({
  setActive,
  active,
}) => {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "fixed",
        bottom: "3em",
      }}
    >
      <li
        onClick={() => setActive(0)}
        className={styles.button}
        style={{ color: active === 0 ? "yellow" : "" }}
      >
        1
      </li>
      <li
        onClick={() => setActive(1)}
        className={styles.button}
        style={{ color: active === 1 ? "yellow" : "" }}
      >
        2
      </li>
      <li
        onClick={() => setActive(2)}
        className={styles.button}
        style={{ color: active === 2 ? "yellow" : "" }}
      >
        3
      </li>
      <li
        onClick={() => setActive(3)}
        className={styles.button}
        style={{ color: active === 3 ? "yellow" : "" }}
      >
        4
      </li>
      <li
        onClick={() => setActive(4)}
        className={styles.button}
        style={{ color: active === 4 ? "yellow" : "" }}
      >
        5
      </li>
    </ul>
  );
};
