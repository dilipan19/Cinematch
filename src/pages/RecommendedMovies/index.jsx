import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import { buildTmdbQuery } from './utils'; // utility to build URL from preferences

function RecommendedMovies() {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  const preferences = location.state || {};

  useEffect(() => {
    const fetchMovies = async () => {
      const apiUrl = buildTmdbQuery(preferences);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovieList(data.results || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [preferences]);

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>Recommended Movies</h2>
        {movieList.length > 0 ? (
          movieList.map((movie) => (
            <div key={movie.id} style={{ marginBottom: '2rem' }}>
              <h5>{movie.title}</h5>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ borderRadius: '8px' }}
              />
              <p>{movie.overview}</p>
            </div>
          ))
        ) : (
          <p>No movies found. Try changing your preferences.</p>
        )}
      </div>
    </>
  );
}

export default RecommendedMovies;
