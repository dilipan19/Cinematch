import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-4">
      <a className="navbar-brand fw-bold" href="/">CineMatch</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/How-it-works">How it works</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About-us">About us</Link>
          </li>
        </ul>

        <div className="d-flex align-items-center">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-danger">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
