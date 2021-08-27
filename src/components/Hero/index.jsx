import React from 'react';
import './style.css';
import Header from '../Header';
import HeroDescription from '../HeroDescription';

function Hero() {
  return(
    <section className="hero">
      <Header />
      <HeroDescription />
    </section>
  );
};

export default Hero;
