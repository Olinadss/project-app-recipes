import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { ComidasProvider } from './hooks/useComidas';
import { BebidasProvider } from './hooks/useBebidas';
import GlobalStorage from './context/GlobalStorage';

function App() {
  return (
    <div className="app">

      <GlobalStorage>
        <ComidasProvider>
          <BebidasProvider>
            <Routes />
          </BebidasProvider>
        </ComidasProvider>
      </GlobalStorage>
    </div>
  );
}

export default App;
