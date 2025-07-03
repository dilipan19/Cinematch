import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import AboutUs from '../../pages/AboutUs';
import HowItWorks from '../../pages/HowItWorks';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About-us" element={<AboutUs />} />
      <Route path="/How-it-works" element={<HowItWorks />} />
    </Routes>
  );
}

export default AppRoutes;
