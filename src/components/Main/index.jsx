import React from 'react';
import './style.css';
import ImageSection1 from '../../images/ImageSection1.png';

function Main() {
  return (
    <main>
      <section>
        <div>
          <h2 className="section-title">Share your home, nanny and costs</h2>
          <p className="section-paragraph-light justify">
            You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be
            , well, fantastic?! If only it was easy to connect with other parents
            to share your costs? Well now it is, with Hapu.
            <span> Hapu means tribe </span>
            and it’s our foundational 3 tribal principles that empowers you to create and manage
            your own tribe. A tribe that together has the power to create new affordable
            solutions in childcare that work for you and your community.
          </p>
          <a href="/">
            Ready to get started?
          </a>
        </div>
        <div>
          <img src={ImageSection1} alt="Example of a Nanny Share profile" />
        </div>
      </section>
    </main>
  );
}

export default Main;
