import React from 'react';
import PlayButton from '../../images/PlayButton.png';
import heroImage from '../../images/heroImage.png';
import './style.css';
import HeroTest from '../HeroTest';

function HeroDescription() {
  return (
    <section className="section-hero-description">
      <div>
        <HeroTest />
      </div>
      <div className="hero-video-link">
        <a href="/">
          <img
            id="play-btn"
            src={PlayButton}
            alt="play button"
          />
        </a>
        <a className="video-link" href="/">
          See hapu in action (27 seconds)
        </a>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Example of Nanny Share" />
      </div>
    </section>
  );
}

export default HeroDescription;
