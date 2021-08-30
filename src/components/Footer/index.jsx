import React from 'react';
import './style.css';
import Button from '../../images/Button.png';
import Logo from '../../images/Logo.svg';
import Facebook from '../../images/Facebook.png';
import Instagram from '../../images/Instagram.png';
import Twitter from '../../images/Twitter.png';

function Footer() {
  return (
    <section className="footer-section">
      <div>
        <h2 className="section-title">Become a nanny share host</h2>
        <p className="section-paragraph">Takes less than 5 minutes to get started</p>
        <a id="create-nany-btn" href="/">
          <img src={Button} alt="Create your nany share button" />
        </a>
        <a className="link-medium" href="/">Or browse local nanny-shares</a>
      </div>
      <footer>
        <a href="/">
          <img id="hapu-logo" src={Logo} alt="Hapu's Logo" />
        </a>
        <div className="empty-container" />
        <nav className="nav-links">
          <ul>
            <li><a href="/">Share Your Nanny</a></li>
            <li><a href="/">Our Story</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Terms & Privacy</a></li>
          </ul>
        </nav>
        <nav id="social-links">
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
      </footer>
      <hr id="footer-line" />
      <span id="footer-copyright">Copyright © 2017 Hapu PTY Limited All rights reserved</span>
    </section>
  );
}

export default Footer;
