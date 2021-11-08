import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { ComidasProvider } from './hooks/useComidas';
import { BebidasProvider } from './hooks/useBebidas';

function App() {
  return (
    <div className="app">
      <ComidasProvider>
        <BebidasProvider>
          <Routes />
        </BebidasProvider>
      </ComidasProvider>
    </div>
  );
}

export default App;
