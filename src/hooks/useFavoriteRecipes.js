import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function useFavoriteRecipes() {
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

  return { favoriteRecipes, getFavoriteStatusByID, toggleFavoriteStatus };
}
