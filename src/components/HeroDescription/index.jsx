import React, { useContext } from 'react';
import PlayButton from '../../images/PlayButton.svg';
import heroImage from '../../images/heroImage.svg';
import './style.css';
import { TestContext } from '../../contexts/TestContext';

function HeroDescription() {
  const { variant } = useContext(TestContext);

  return (
    <section className="section-hero-description">
      <div>
        {variant}
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
