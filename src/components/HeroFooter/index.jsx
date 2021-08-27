import React from 'react';
import ProfileImage from '../../images/ProfileImage.png';
import './style.css';

function HeroFooter() {
  return (
    <div className="hero-footer">
      <img src={ProfileImage} alt="profile avatar" />
      <a href="/">
        Sarah’s day care available now in North Sydney
      </a>
      <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
    </div>
  );
}

export default HeroFooter;
