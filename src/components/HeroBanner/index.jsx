import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './HeroBanner.css';

const HeroBanner = ({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setImageLoaded(false);
    if (movie?.backdrop_path) {
      const img = new Image();
      img.src = movie.backdrop_path;
      img.onload = () => setImageLoaded(true);
    }
  }, [movie]);

  if (!movie) return <div className="hero-skeleton"></div>;

  return (
    <div className="hero-container">
      <AnimatePresence>
        {imageLoaded && (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="hero-backdrop"
            style={{ backgroundImage: `url(${movie.backdrop_path})` }}
          />
        )}
      </AnimatePresence>
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hero-title"
        >
          {movie.title || movie.name}
        </motion.h1>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hero-buttons"
        >
          <button 
            className="btn-play tv-focus-element"
            onClick={() => navigate(`/play/${movie.id}`, { state: { movie } })}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon-play">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <button className="btn-more-info tv-focus-element glass">
            <svg viewBox="0 0 24 24" fill="currentColor" className="icon-info">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            More Info
          </button>
        </motion.div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hero-description"
        >
          {movie.overview}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroBanner;

