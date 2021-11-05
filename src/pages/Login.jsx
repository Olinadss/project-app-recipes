import React from 'react';

export default function Login() {
  return (
    <div>
      <input data-testid="email-input" type="email" />
      <input data-testid="password-input" type="text" />
      <button data-testid="login-submit-btn" type="button">Entrar</button>
    </div>
  );
}
