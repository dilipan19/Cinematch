import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import AboutUs from '../../pages/AboutUs';
import HowItWorks from '../../pages/HowItWorks';
import QuestionPage from '../../pages/QuestionPage';
import RecommendedMovies from '../../pages/RecommendedMovies';
import Player from '../../pages/Player';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About-us" element={<AboutUs />} />
      <Route path="/How-it-works" element={<HowItWorks />} />
      <Route path="/question-page" element={<QuestionPage />} />
      <Route path="/recommendation-page" element={<RecommendedMovies />} />
      <Route path="/play/:id" element={<Player />} />
    </Routes>   
  );
}

export default AppRoutes;

