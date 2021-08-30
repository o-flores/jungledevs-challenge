import React, { useState } from 'react';
import './style.css';
import signNewsletter from '../../services/api';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleApiResponse(response) {
    let message = '';
    if (response.error) message = `${response.error} Please try again later`;
    if (response.email) message = response.email;

    if (message === '') setSuccess(true);
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '') alert('Fields may not be blank');
    if (name.trim() !== '' || email.trim() !== '') {
      const response = await signNewsletter(name, email);
      handleApiResponse(response);
    }

    setLoading(false);
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
      {loading && 'loading'}
      {success && 'sucesso'}
    </form>
  );
}

export default Form;
