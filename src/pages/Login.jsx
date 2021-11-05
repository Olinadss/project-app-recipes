import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        type="text"
        value={ password }
        onChange={ ({ target: { value } }) => setPassword(value) }
      />
      <button data-testid="login-submit-btn" type="button">Entrar</button>
    </div>
  );
}
