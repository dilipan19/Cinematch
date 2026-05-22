import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { buildTmdbQuery } from './utils';
import MovieCard from '../../components/MovieCard';

function RecommendedMovies() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const preferences = location.state || {};

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const apiUrl = buildTmdbQuery(preferences);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const mappedResults = (data.results || []).map(m => ({
          ...m,
          backdrop_path: m.backdrop_path ? `https://image.tmdb.org/t/p/w500${m.backdrop_path}` : m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : 'https://via.placeholder.com/500x281?text=No+Image',
          media_type: m.media_type || 'movie',
          vote_average: m.vote_average || 0
        }));

        setMovieList(mappedResults);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [preferences]);

  return (
    <div className="page-recommendations">
      <h2 className="page-recommendations__title">Recommended Movies</h2>

      {isLoading ? (
        <p className="page-recommendations__status">Loading your perfect matches...</p>
      ) : movieList.length > 0 ? (
        <div className="recommendations-grid">
          {movieList.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </div>
      ) : (
        <p className="page-recommendations__status">No movies found. Try changing your preferences.</p>
      )}
    </div>
  );
}

export default RecommendedMovies;
