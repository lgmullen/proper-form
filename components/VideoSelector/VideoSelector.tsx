import { FunctionComponent } from "react";
import styles from "./VideoSelector.module.css";

interface VideoSelectorProps {
  setActive: (activeId: number) => void;
  active: number;
  videos: any[];
}

export const VideoSelector: FunctionComponent<VideoSelectorProps> = ({
  setActive,
  active,
  videos,
}) => {
  const videoTitle = videos.find((video) => video.id == active).title;
  return (
    <div className={styles.videoSelectorContainer}>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "sticky",
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          padding: "2em",
        }}
      >
        <h3 className={styles.reelHeader}>{videoTitle}</h3>
        <p className={styles.infoText}>Insert text here</p>
      </div>
    </div>
  );
};
