"use client";
import styles from "./HomePage.module.css";
import { FunctionComponent, useState } from "react";
import { Background } from "../Background";
import { VideoSelector } from "../VideoSelector/VideoSelector";
import { NavBar } from "../NavBar/NavBar";
import { Modal } from "../Modal/Modal";

const videoData = [
  {
    title: "Demo Reel",
    hidden: false,
    id: 0,
    src: "https://player.vimeo.com/progressive_redirect/playback/895937469/rendition/720p/file.mp4?loc=external&log_user=0&signature=4ddc4b49c0b7acc2b8ab0cf751c6e7f00510d36bbb1b51c133ad6b2ad7163f1f",
  },
  {
    title: "Mastercard Part One",
    hidden: true,
    id: 1,
    src: "https://player.vimeo.com/progressive_redirect/playback/878480743/rendition/720p/file.mp4?loc=external&log_user=0&signature=7eb728dfbd2872b54e8216f0d93a830890316b3ea942666ccaafb70c37c36561",
  },
  {
    title: "Mastercard Part Two",
    hidden: true,
    id: 2,
    src: "https://player.vimeo.com/progressive_redirect/playback/882173505/rendition/720p/file.mp4?loc=external&log_user=0&signature=fb9cd14e3f372d81e7068d32b8c09d1553958058d127f8eaae1581dd49500adf",
  },
  {
    title: "Mastercard Part Three",
    hidden: true,
    id: 3,
    src: "https://player.vimeo.com/progressive_redirect/playback/885026653/rendition/720p/file.mp4?loc=external&log_user=0&signature=b0f936fe6dfaf51cb9faca6749def1f5e421ed762677e2a049c257cd9ad6cfc9",
  },
  {
    title: "Mastercard Part Four",
    hidden: true,
    id: 4,
    src: "https://player.vimeo.com/progressive_redirect/playback/869288589/rendition/720p/file.mp4?loc=external&log_user=0&signature=42397ab76d3acfd827481da43189663e4d03a078af1b07ccea59689a81df08fd",
  },
];

export const HomePage: FunctionComponent = () => {
  const [videos, setVideos] = useState(videoData);
  const [active, setActive] = useState(0);

  const handleUpdate = (activeId: number) => {
    setVideos(
      videos.map((video) => {
        if (video.id === activeId) {
          return { ...video, hidden: false };
        } else {
          return { ...video, hidden: true };
        }
      })
    );
  };

  const handleClick = (activeId: number) => {
    setActive(activeId);
    handleUpdate(activeId);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <NavBar />
      <h3 className={styles.title}>Proper Form</h3>
      <VideoSelector setActive={handleClick} active={active} videos={videos} />
      <Background active={active} videos={videos} />
    </div>
  );
};
