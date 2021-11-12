import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const FavoriteRecipesContext = createContext();

export function FavoriteRecipesProvider({ children }) {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const getFavoriteStatusByID = (targetID) => favoriteRecipes.some(
    ({ id }) => id === targetID,
  );

  const toggleFavoriteStatus = (targetID, newFavoriteRecipe) => {
    const isFavorite = getFavoriteStatusByID(targetID);

    if (isFavorite) {
      const newFavoriteRecipes = favoriteRecipes.filter(({ id }) => id !== targetID);
      setFavoriteRecipes(newFavoriteRecipes);
    } else {
      setFavoriteRecipes([...favoriteRecipes, newFavoriteRecipe]);
    }
  };

  useEffect(() => {
    const localStorageFavoriteRecipes = getLocalStorage('favoriteRecipes');

    if (!localStorageFavoriteRecipes) return;

    setFavoriteRecipes(localStorageFavoriteRecipes);
  }, []);

  useEffect(() => {
    setLocalStorage('favoriteRecipes', favoriteRecipes);
  }, [favoriteRecipes]);

  const contextValue = {
    favoriteRecipes,
    toggleFavoriteStatus,
    getFavoriteStatusByID,
  };

  return (
    <FavoriteRecipesContext.Provider value={ contextValue }>
      { children }
    </FavoriteRecipesContext.Provider>
  );
}

export default function useFavoriteRecipes() {
  const context = useContext(FavoriteRecipesContext);

  return context;
}
FavoriteRecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
