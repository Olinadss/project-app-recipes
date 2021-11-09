import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="login">
      <aside>
        <h1 style={ { textAlign: 'center' } }>Bem-vindo</h1>
        <img className="img-aside" alt="logo" src="https://www.mixadesivos.com.br/simulador/5bf73bc6c6e6775d472621264309a88b/1_21_190411102918_adesivo-de-parede-mestre-cuca.png" />
      </aside>
      <div className="login-container">
        <h1 className="login-label">Login</h1>
        <input
          className="form-control"
          data-testid="email-input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <input
          className="form-control"
          data-testid="password-input"
          placeholder="Senha"
          type="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />

        <Link to="/comidas">
          <button
            className="btn btn-success"
            data-testid="login-submit-btn"
            type="button"
            disabled={ !validEmailAndPassword() }
            onClick={ () => sendToLocalStorage() }
          >
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
}
