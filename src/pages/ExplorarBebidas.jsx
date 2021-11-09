import React from 'react';
import { Header, Footer, ContainerExplorar } from '../components';

export default function ExplorarBebidas() {
  return (
    <div>
      <Header title="Explorar Bebidas" search={ false } />
      <ContainerExplorar type="bebida" />
      <Footer />
    </div>
  );
}
