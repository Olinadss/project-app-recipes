import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router';
import Routes from './Routes';
import { ComidasProvider } from './hooks/useComidas';
import { BebidasProvider } from './hooks/useBebidas';
import GlobalStorage from './context/GlobalStorage';



function App() {
  return (
    <div className="app">
      <Switch>
      <GlobalStorage>
      <ComidasProvider>
        <BebidasProvider>
          <Routes />
        </BebidasProvider>
      </ComidasProvider>
    </GlobalStorage>
    </Switch>
    </div>
  );
}

export default App;
