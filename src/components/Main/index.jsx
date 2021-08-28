import React from 'react';
import './style.css';
import ImageSection1 from '../../images/ImageSection1.png';
import ImageSection3 from '../../images/ImageSection3.png';
import ImageSection4 from '../../images/ImageSection4.png';
import ImageSection5 from '../../images/ImageSection5.png';

function Main() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main>
      <section id="section-one" className="section">
        <div>
          <h2
            className="section-title"
          >
            Share your home,
            <br />
            nanny and costs
          </h2>
          <p className="section-paragraph">
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
      <hr className="section-line" />
      <section id="section-two" className="section">
        <div>
          <h2 className="section-title">
            Are you a parent without a nanny and looking to share?
          </h2>
          <p className="section-paragraph">
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input id="input-name" type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <button
            type="button"
            className="action-btn btn"
          >
            Send
          </button>
        </form>
      </section>
      <hr className="section-line" />
      <section id="section-three" className="section">
        <div>
          <img src={ImageSection3} alt="Hapu's payment system layout" />
          <div>
            <h2 className="section-title">
              Shared payments made simple
            </h2>
            <p className="section-paragraph justify">
              Sometimes it’s hard enough just sharing a restaurant bill.
              Try sharing that bill week in, week out and you might encounter more than a few
              snares. But not with Hapu. Simply set your rates and our automated payment
              system takes care of the rest. You need never talk money or who owes what.
            </p>
            <a href="/" className="link-medium">Read how Bridget’s share (without Hapu) ended over $15</a>
          </div>
        </div>
      </section>
      <hr className="section-line" />
      <section id="section-four" className="section">
        <h2 className="section-title">A framework built for the long term</h2>
        <p className="section-paragraph">
          Childcare is for the long term. And you need a framework you can count on that gives
          your share long term viability and success. That’s why we’ve defined Hapu around our
          three tribal principles; clearly defined process, transparency over money and
          equality of participation.
        </p>
        <a href="/" className="link-medium">Read how Hapu’s tribal background defines our app </a>
        <img src={ImageSection4} alt="Hapu's billing history layout" />
      </section>
      <hr className="section-line" />
      <section id="section-five" className="section">
        <img src={ImageSection5} alt="Shows a notepad, a tablet and a frame" />
        <h2 className="section-title">Coming soon: Nanny Share Daily Diary!</h2>
        <p className="section-paragraph">
          With the Hapu daily diary your nanny will be able to update you and your sharers
          with photos and commentary of the day. You and sharers will receive
          notifications and you’ll be able to login to view the daily adventures fo your
          little ones. We can’t wait!
        </p>
      </section>
    </main>
  );
}

export default Main;
