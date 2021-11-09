import React from 'react';
import { Header, Footer } from '../components';

export default function Perfil() {
  return (
    <div>
      <Header title="Perfil" search={ false } />
      <section>
        <p data-testid="profile-email">email@gmail.com</p>
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
