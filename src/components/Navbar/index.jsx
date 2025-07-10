import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-4 shadow-sm">
      <Link className="navbar-brand fw-bold" to="/">CineMatch</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/how-it-works">How it works</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">About us</Link>
          </li>
        </ul>

        <form className="d-flex align-items-center">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-danger" type="button" onClick={() => navigate('/question-page')}>Get Started</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
