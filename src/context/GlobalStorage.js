import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = React.createContext();

const GlobalStorage = ({ children }) => {
  const [responseFetch, setResponseFetch] = useState(null);

  const value = {
    responseFetch,
    setResponseFetch,
  };

  return (
    <GlobalContext.Provider value={ value }>
      {children}
    </GlobalContext.Provider>
  );
};
GlobalStorage.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobalStorage;
