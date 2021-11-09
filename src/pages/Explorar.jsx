import React from 'react';
import { Header, Footer } from '../components';

export default function Explorar() {
  return (
    <div>
      <Header title="Explorar" search={ false } />
      <button
        data-testid="explore-food"
        type="button"
      >
        Explorar Comidas
      </button>
      <button
        data-testid="explore-drinks"
        type="button"
      >
        Explorar Bebidas
      </button>
      <Footer />
    </div>
  );
}
