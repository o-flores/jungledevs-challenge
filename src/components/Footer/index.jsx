import React from 'react';
import './style.css';
import Button from '../../images/Button.png';
import Logo from '../../images/Logo.svg';
import Facebook from '../../images/Facebook.png';
import Instagram from '../../images/Instagram.png';
import Twitter from '../../images/Twitter.png';

function Footer() {
  return (
    <section>
      <div>
        <h2>Become a nanny share host</h2>
        <p>Takes less than 5 minutes to get started</p>
        <a href="/">
          <img src={Button} alt="Create your nany share button" />
        </a>
        <a href="/">Or browse local nanny-shares</a>
      </div>
      <footer>
        <a href="/">
          <img src={Logo} alt="Hapu's Logo" />
        </a>
        <nav>
          <ul>
            <li>Share Your Nanny</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Terms & Privacy</li>
          </ul>
        </nav>
        <nav>
          <a href="/">
            <img src={Facebook} alt="Facebook logo" />
          </a>
          <a href="/">
            <img src={Twitter} alt="Twitter logo" />
          </a>
          <a href="/">
            <img src={Instagram} alt="Instagram logo" />
          </a>
        </nav>
        <span>Copyright © 2017 Hapu PTY Limited All rights reserved</span>
      </footer>
    </section>
  );
}

export default Footer;
