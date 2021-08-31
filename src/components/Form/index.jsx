import React, { useState, useContext } from 'react';
import './style.css';
import { FaSpinner } from 'react-icons/fa';
import signNewsletter from '../../services/api';
import { TestContext } from '../../contexts/TestContext';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { emitWin } = useContext(TestContext);

  function handleApiResponse(response) {
    let message = '';
    if (response.error) message = `${response.error} Please try again later`;
    if (response.email) message = response.email;

    if (message === '') {
      setSuccess(true);
      emitWin();
      return;
    }
    alert(message);
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
      {loading && <FaSpinner className="spinner" />}
      {!loading && success && <span className="success-message">Thanks for joining  our Newsletter!</span>}
    </form>
  );
}

export default Form;
