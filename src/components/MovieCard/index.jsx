import React from 'react';

function MovieCard({ movie }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h4>{movie.title}</h4>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        style={{ borderRadius: '8px' }}
      />
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieCard;
