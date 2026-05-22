import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { saveWatchProgress } from '../../services/ott';
import './Player.css';

const DEFAULT_VIDEO =
  'https://www.w3schools.com/html/mov_bbb.mp4';

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const videoRef = useRef(null);
  const movie = location.state?.movie || {
    id: Number(id),
    title: 'Now Playing',
    name: 'Now Playing',
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (video.duration && !Number.isNaN(video.duration)) {
        saveWatchProgress(movie, video.currentTime, video.duration);
      }
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, [movie]);

  return (
    <div className="player-container">
      <div className="player-overlay">
        <button
          className="back-btn tv-focus-element glass"
          onClick={() => navigate(-1)}
          aria-label="Go Back"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          Back
        </button>
        <p className="player-title">{movie.title || movie.name}</p>
      </div>
      <video
        ref={videoRef}
        className="video-player"
        controls
        autoPlay
        muted
        playsInline
        controlsList="nodownload"
      >
        <source src={DEFAULT_VIDEO} type="video/mp4" />
        <track kind="captions" srcLang="en" label="English" default />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default Player;
