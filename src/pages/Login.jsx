import React, { useState } from 'react';
import { setLocalStorage } from '../utils/localStorage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validEmailAndPassword() {
    const emailRegex = /\S+@\S+\.\S+/;
    const MIN_PASSWORD_LENGTH = 6;

    return emailRegex.test(email) && password.length > MIN_PASSWORD_LENGTH;
  }

  function sendToLocalStorage() {
    setLocalStorage('mealsToken', 1);
    setLocalStorage('cocktailsToken', 1);
    setLocalStorage('user', { email });
  }

  return (
    <div>
      <input
        data-testid="email-input"
        type="email"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
      />
      <input
        data-testid="password-input"
        type="password"
        value={ password }
        onChange={ ({ target: { value } }) => setPassword(value) }
      />
      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ !validEmailAndPassword() }
        onClick={ () => sendToLocalStorage() }
      >
        Entrar
      </button>
    </div>
  );
}
