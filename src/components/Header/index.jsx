import React from 'react';
import Badge from '../../images/Badge.png';
import './style.css';

function Header() {
  return (
    <header>
      <nav className="left-container">
        <a href="/" id="badger">
          <img src={Badge} alt="Hapu's badge" />
        </a>
        <a href="/" className="header-links hero-text">
          Create Your Nanny Share
        </a>
        <a href="/" className="header-links hero-text">
          Browse Shares
        </a>
        <a href="/" className="header-links hero-text">
          Our Story
        </a>
      </nav>
      <div className="right-container">
        <button
          type="button"
          className="action-btn btn hero-text"
        >
          Become a Nanny Share Host
        </button>
        <button
          type="button"
          className="sign-btn btn hero-text"
        >
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
