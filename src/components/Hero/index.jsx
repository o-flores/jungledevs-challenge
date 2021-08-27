import React from 'react';
import Badge from '../../images/Badge.png';
import './style.css';

function Hero() {
  return(
    <section className="hero">
      <header>
        <nav className="left-container">
          <a href="/" id="badger">
            <img src={ Badge } alt="Hapu's badge" />
          </a>
          <a href="/" className="header-links header-text">
            Create Your Nanny Share
          </a>
          <a href="/" className="header-links header-text">
            Browse Shares
          </a> 
          <a href="/" className="header-links header-text">
            Our Story
          </a>
        </nav>
        <div className="right-container">
          <button
            type='button'
            className="action-btn btn header-text">
            Become a Nanny Share Host
          </button>
          <button
            type='button'
            className="sign-btn btn header-text">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Hero;
