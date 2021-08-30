import React from 'react';
import './style.css';

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
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
  );
}

export default Form;
