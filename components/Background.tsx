import { FunctionComponent } from "react";

interface BackgroundProps {
  active: number;
  videos: any[];
}

export const Background: FunctionComponent<BackgroundProps> = ({
  active,
  videos,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        width: "100vw",
        height: "100%",
        zIndex: -1,
      }}
    >
      {videos?.map((video) => (
        <video
          key={`video-${video.id}`}
          width="100%"
          height="100%"
          id={`video-${video.id}`}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            objectFit: "cover",
            display: video.hidden ? "none" : "",
          }}
        />
      ))}
    </div>
  );
};

// const renderSwitch = (param: number) => {
//   switch (param) {
//     case 0:
//       return (
// <video
//   width="100%"
//   height="100%"
//   id="video-1"
//   src="https://player.vimeo.com/progressive_redirect/playback/908010512/rendition/720p/file.mp4?loc=external&oauth2_token_id=1246843681&signature=479022350ae52a0092e35dd6495735875ae3cfec32867b41bcf7330af0002eee"
//   autoPlay
//   muted
//   loop
//   playsInline
//   preload="auto"
//   style={{ objectFit: "cover" }}
// />;
//       );
//     case 1:
//       return (
//         <video
//           width="100%"
//           height="100%"
//           id="video-1"
//           src="https://player.vimeo.com/progressive_redirect/playback/903042426/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1105776076&signature=a5142fdb32801b2c90e62ea6c924c4fa208ce962346abceb813914c7d1456aeb"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           style={{ objectFit: "cover" }}
//         />
//       );
//     default:
//       return "foo";
//   }
// };
