import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrending, fetchTopRated, fetchActionMovies } from '../../store/tmdbSlice';
import HeroBanner from '../../components/HeroBanner';
import Carousel from '../../components/Carousel';
import ContinueWatching from '../../components/ContinueWatching';

const Home = () => {
  const dispatch = useDispatch();
  const { trending, topRated, actionMovies, status } = useSelector((state) => state.tmdb);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTrending());
      dispatch(fetchTopRated());
      dispatch(fetchActionMovies());
    }
  }, [status, dispatch]);

  return (
    <div className="home-page">
      <HeroBanner movie={trending.length > 0 ? trending[0] : null} />
      
      <div className="carousels-section">
        <ContinueWatching />
        <Carousel title="Trending Now" movies={trending.slice(1)} />
        <Carousel title="Top Rated Series" movies={topRated} />
        <Carousel title="Action Blockbusters" movies={actionMovies} />
      </div>
    </div>
  );
};

export default Home;
