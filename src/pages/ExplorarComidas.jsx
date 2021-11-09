import React from 'react';
import { Header, Footer, ContainerExplorar } from '../components';

export default function ExplorarComidas() {
  return (
    <div>
      <Header title="Explorar Comidas" search={ false } />
      <ContainerExplorar type="comida" />
      <Footer />
    </div>
  );
}
