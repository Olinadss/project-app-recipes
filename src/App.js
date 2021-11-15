import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { ComidasProvider } from './hooks/useComidas';
import { BebidasProvider } from './hooks/useBebidas';
import GlobalStorage from './context/GlobalStorage';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

function App() {
  const initialLocalStorage = [
    {
      key: 'inProgressRecipes',
      value: {
        meals: {},
        cocktails: {},
      },
    },
  ];

  initialLocalStorage.forEach(({ key, value }) => {
    if (!getLocalStorage(key)) setLocalStorage(key, value);
  });

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
