import React, { useState, useEffect, useRef  } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
// import PlatformBadge from '../PlatformBadge/PlatformBadge';

const NAV_ITEMS = [
  { to: '/', end: true, label: 'Home' },
  { to: '/question-page', label: 'Find Match' },
  { to: '/How-it-works', label: 'How it Works' },
  { to: '/About-us', label: 'About Us' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

const profileRef = useRef(null);

const user = {
  name: 'Dilipan',
  email: 'dilipan@example.com',
  role: 'Frontend Developer',
};

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const handleClickOutside = (event) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setShowProfileModal(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand tv-focus-element">
          STREAM
        </Link>
        <div className="navbar-links navbar-links--desktop">
          {NAV_ITEMS.map(({ to, end, label }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link tv-focus-element${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-menu-toggle tv-focus-element"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className={`menu-icon ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
          {/* <PlatformBadge /> */}
          <button className="icon-btn tv-focus-element" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </button>
        <div className="profile-wrapper" ref={profileRef}>
  <button
    className="icon-btn tv-focus-element"
    aria-label="Profile"
    title={user.name}
    onClick={() => setShowProfileModal(!showProfileModal)}
  >
    <div className="profile-avatar"></div>
  </button>

  {showProfileModal && (
    <div className="profile-modal">
      <div className="profile-modal-header">
        <div className="profile-avatar large"></div>

        <div>
          <h4>{user.name}</h4>
          <p>{user.role}</p>
        </div>
      </div>

      <div className="profile-info">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      <button className="logout-btn">
        Logout
      </button>
    </div>
  )}
</div>
        </div>
      </div>

      <div
        className={`navbar-mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        onClick={closeMobileMenu}
      />
      <div
        className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {NAV_ITEMS.map(({ to, end, label }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `nav-link nav-link--mobile tv-focus-element${isActive ? ' active' : ''}`}
            onClick={closeMobileMenu}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
