import React, { useState } from 'react';
import './style.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        id="input-name"
        type="text"
        placeholder="Your Name"
        onChange={({ target }) => setName(target.value)}
      />
      <input
        value={email}
        type="text"
        placeholder="Your Email"
        onChange={({ target }) => setEmail(target.value)}
      />
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
