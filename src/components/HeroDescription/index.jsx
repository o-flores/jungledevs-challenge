import React from 'react';
import PlayButton from '../../images/PlayButton.png';
import heroImage from '../../images/heroImage.png';
import './style.css';

function HeroDescription() {
  return (
    <section className="section-hero-description">
      <div>
        <h1 className="hero-title">Easily create or join a local nanny share with Hapu</h1>
        <p className="hero-description">Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
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
        <img src={heroImage} alt="sdfdsf" />
      </div>
    </section>
  );
}

export default HeroDescription;
