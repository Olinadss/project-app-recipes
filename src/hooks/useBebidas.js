import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const BebidasContext = createContext({});

export function BebidasProvider({ children }) {
  const [urlBebidas, setUrlBebidas] = useState('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(urlBebidas);
      const data = await response.json();
      setBebidas(data.drinks);
    }

    fetchAPI();
  }, [urlBebidas]);

  return (
    <BebidasContext.Provider value={ { bebidas, setUrlBebidas } }>
      {children}
    </BebidasContext.Provider>
  );
}

BebidasProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default function useBebidas() {
  const context = useContext(BebidasContext);

  return context;
}
