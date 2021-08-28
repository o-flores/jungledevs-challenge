import React from 'react';
import './style.css';
import ImageSection1 from '../../images/ImageSection1.png';

function Main() {
  return (
    <main>
      <section className="section">
        <div>
          <h2
            className="section-title"
          >
            Share your home,
            <br />
            nanny and costs
          </h2>
          <p className="section-paragraph-light justify">
            You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be
            , well, fantastic?! If only it was easy to connect with other parents
            to share your costs? Well now it is, with Hapu.&nbsp;
            <span className="link-medium">Hapu means tribe</span>
            &nbsp;and it’s our foundational 3 tribal principles that empowers you to create
            and manage your own tribe. A tribe that together has the power to create new affordable
            solutions in childcare that work for you and your community.
          </p>
          <a href="/" className="link-medium">
            Ready to get started?
          </a>
        </div>
        <img src={ImageSection1} alt="Example of a Nanny Share profile" />
      </section>
    </main>
  );
}

export default Main;
