import React from 'react';
import Badge from '../../images/Badge.png';
import './style.css';

function Hero() {
  return(
    <section className="hero">
      <header>
        <nav className="left-container">
          <a href="/">
            <img src={ Badge } alt="Hapu's badge" />
          </a>
          <a href="/">
            Create Your Nanny Share
          </a>
          <a href="/">
          Browse Shares
          </a> 
          <a href="/">
          Our Story
          </a>
        </nav>
        <div className="right-container">
          <button
            type='button'
            className="action-btn">
            Become a Nanny Share Host
          </button>
          <button
            type='button'
            className="sign-btn">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Hero;
