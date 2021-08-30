import React from 'react';
import './style.css';
import { useExperiment, emitter } from '@marvelapp/react-ab-test';

emitter.defineVariants('Hero title and description test', ['A', 'B']);

function HeroTest() {
  const { selectVariant } = useExperiment('Hero title and description test');
  const variant = selectVariant({
    A:
  <>
    <h1 className="hero-title">Easily create or join a local nanny share with Hapu</h1>
    <p className="hero-description">Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
  </>,
    B:
  <>
    <h1 className="hero-title">Create the childcare you need at a price you can afford</h1>
    <p className="hero-description">Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.</p>
  </>,
  });
  return (
    <>
      { variant }
    </>
  );
}

export default HeroTest;
