import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Footer } from '../components';
import { getLocalStorage } from '../utils/localStorage';

export default function Perfil() {
  const user = getLocalStorage('user');
  const history = useHistory();

  function handleClick(route) {
    history.push(route);
  }

  return (
    <div>
      <Header title="Perfil" search={ false } />
      <section>
        <p data-testid="profile-email">
          {user && user.email}
        </p>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => handleClick('/receitas-feitas') }
        >
          Receitas Feitas
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => handleClick('/receitas-favoritas') }
        >
          Receitas Favoritas
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => {
            localStorage.clear();
            handleClick('/');
          } }
        >
          Sair
        </button>
      </section>
      <Footer />
    </div>
  );
}
