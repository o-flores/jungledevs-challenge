import React from 'react';
import Header from '../Header';
import HeroDescription from '../HeroDescription';
import HeroFooter from '../HeroFooter';

function Hero() {
  return (
    <section className="hero">
      <Header />
      <HeroDescription />
      <HeroFooter />
    </section>
  );
}

export default Hero;
