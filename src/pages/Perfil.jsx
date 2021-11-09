import React from 'react';
import { Header, Footer } from '../components';
import { getLocalStorage } from '../utils/localStorage';

export default function Perfil() {
  const { email } = getLocalStorage('user');

  return (
    <div>
      <Header title="Perfil" search={ false } />
      <section>
        <p data-testid="profile-email">{email}</p>
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
        <button type="button" data-testid="profile-logout-btn">Sair</button>
      </section>
      <Footer />
    </div>
  );
}
