import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate(`/play/${movie.id}`, { state: { movie } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePlay();
    }
  };

  return (
    <motion.div
      className="movie-card tv-focus-element"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlay}
      onKeyDown={handleKeyDown}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      tabIndex={0} // For Smart TV D-Pad focus
    >
      {movie.progress > 0 && (
        <div className="movie-card-progress" style={{ width: `${movie.progress * 100}%` }} />
      )}
      <img
        src={movie.backdrop_path}
        alt={movie.title || movie.name}
        className="movie-card-img"
        loading="lazy"
      />
      <div className={`movie-card-info ${isHovered ? 'visible' : ''}`}>
        <h4>{movie.title || movie.name}</h4>
        <div className="movie-card-meta">
          <span className="rating">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            {movie.vote_average.toFixed(1)}
          </span>
          <span className="type">{movie.media_type === 'tv' ? 'Series' : 'Movie'}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;

