/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HeroFooter from './components/HeroFooter';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Hero />
      <HeroFooter />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
