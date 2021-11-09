import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Footer } from '../components';

export default function Explorar() {
  const history = useHistory();

  function handleClick(route) {
    history.push(route);
  }

  return (
    <div>
      <Header title="Explorar" search={ false } />
      <button
        data-testid="explore-food"
        type="button"
        onClick={ () => handleClick('/explorar/comidas') }
      >
        Explorar Comidas
      </button>
      <button
        data-testid="explore-drinks"
        type="button"
        onClick={ () => handleClick('/explorar/bebidas') }
      >
        Explorar Bebidas
      </button>
      <Footer />
    </div>
  );
}
