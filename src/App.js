/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Hero from './components/Hero';
import HeroFooter from './components/HeroFooter';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Hero />
      <HeroFooter />
      <Main />
    </div>
  );
}

export default App;
