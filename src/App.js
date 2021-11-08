import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { ComidasProvider } from './hooks/useComidas';

function App() {
  return (
    <div className="app">
      <ComidasProvider>
        <Routes />
      </ComidasProvider>
    </div>
  );
}

export default App;
