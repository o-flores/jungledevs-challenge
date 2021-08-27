import React from 'react';
import Header from '../Header';
import HeroDescription from '../HeroDescription';
import './style.css';

function Hero() {
  return (
    <section className="hero">
      <Header />
      <HeroDescription />
    </section>
  );
}

export default Hero;
