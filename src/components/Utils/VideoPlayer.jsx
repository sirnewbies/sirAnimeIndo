// VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-4">Video Player</h2>
      <video controls width="100%" height="auto">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
