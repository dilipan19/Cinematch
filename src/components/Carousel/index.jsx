import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import MovieCard from '../MovieCard';
import './Carousel.css';

const Carousel = ({ title, movies }) => {
  const rowRef = useRef(null);

const handleScroll = (direction) => {
  if (rowRef.current) {
    const scrollAmount = 800;

    rowRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
};

  if (!movies || movies.length === 0) return null;

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-wrapper">
        <button 
          className="carousel-control left tv-focus-element"
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
        </button>
        
        <div className="carousel-row no-scrollbar" ref={rowRef}>
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </div>

        <button 
          className="carousel-control right tv-focus-element"
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
