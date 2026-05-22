import React from 'react';
import AppRoutes from './components/Routes';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;

