import React, { useRef } from 'react';
import YouTube from 'react-youtube';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './video.css';

const Video = ({ videoId, title }) => {
  const opts = {
    height: '250',
    width: '350',
  };

  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  return (
    <div className="video-card">
      <Card className="video-card">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <button onClick={playVideo}>Play Video</button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Video;
