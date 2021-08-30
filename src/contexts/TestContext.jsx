import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useExperiment, emitter } from '@marvelapp/react-ab-test';
import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_KEY);

emitter.defineVariants('Hero test', ['A', 'B']);

emitter.addWinListener((experimentName, variantName) => {
  mixpanel.track(`${experimentName} ${variantName}`, {
    name: experimentName,
    variant: variantName,
  });
});

export const TestContext = createContext({});

export function TestContextProvider({ children }) {
  const { selectVariant, emitWin } = useExperiment('Hero test');
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
    <TestContext.Provider value={{ variant, emitWin }}>
      {children}
    </TestContext.Provider>
  );
}

TestContextProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
