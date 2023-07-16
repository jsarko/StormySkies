import React from "react";
import { VideoBackgroundContainer, Video } from "./styled";

const VideoBackground = () => {
  return (
    <VideoBackgroundContainer>
      <Video autoPlay muted loop>
        <source src="/videos/cloudy.mp4" type="video/mp4" />
      </Video>
    </VideoBackgroundContainer>
  );
};

export default VideoBackground;
