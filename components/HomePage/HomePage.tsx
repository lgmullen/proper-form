"use client";
import styles from "./HomePage.module.css";
import { FunctionComponent, useState } from "react";
import { Background } from "../Background";
import { VideoSelector } from "../VideoSelector/VideoSelector";

const videoData = [
  {
    hidden: false,
    id: 0,
    src: "https://player.vimeo.com/progressive_redirect/playback/903042426/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1105776076&signature=a5142fdb32801b2c90e62ea6c924c4fa208ce962346abceb813914c7d1456aeb",
  },
  {
    hidden: true,
    id: 1,
    src: "https://player.vimeo.com/progressive_redirect/playback/908010512/rendition/720p/file.mp4?loc=external&oauth2_token_id=1246843681&signature=479022350ae52a0092e35dd6495735875ae3cfec32867b41bcf7330af0002eee",
  },
  {
    hidden: true,
    id: 2,
    src: "https://player.vimeo.com/progressive_redirect/playback/908015728/rendition/720p/file.mp4?loc=external&oauth2_token_id=1246843681&signature=fd765ff3d1d0ac126772005fc42062640d193dc2f6addd2796e3e9e1005d0a5a",
  },
];

export const HomePage: FunctionComponent = () => {
  const [videos, setVideos] = useState(videoData);
  const [active, setActive] = useState(0);

  const handleUpdate = (activeId: number) => {
    setVideos(
      videos.map((video) => {
        if (video.id === activeId) {
          // Create a *new* object with changes
          return { ...video, hidden: false };
        } else {
          // No changes
          return { ...video, hidden: true };
        }
      })
    );
  };

  const handleClick = (activeId: number) => {
    console.log(activeId);
    setActive(activeId);
    handleUpdate(activeId);
  };

  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <h3 className={styles.title}>Proper Form</h3>
        <VideoSelector setActive={handleClick} active={active} />
        <Background active={active} videos={videos} />
      </div>
    </main>
  );
};
