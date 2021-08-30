import React, { useState } from 'react';
import './style.css';
import signNewsletter from '../../services/api';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    signNewsletter(name, email);
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
        type="submit"
        className="action-btn btn"
      >
        Send
      </button>
    </form>
  );
}

export default Form;
