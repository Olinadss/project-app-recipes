import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const ComidasContext = createContext({});

export function ComidasProvider({ children }) {
  const [urlComidas, setUrlComidas] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(urlComidas);
      const data = await response.json();
      setComidas(data.meals);
    }

    fetchAPI();
  }, [urlComidas]);

  return (
    <ComidasContext.Provider value={ { comidas, setUrlComidas } }>
      {children}
    </ComidasContext.Provider>
  );
}

ComidasProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default function useComidas() {
  const context = useContext(ComidasContext);

  return context;
}
