import { useEffect, useState } from 'react';

export default function useFetchRecipe(type, recipeID) {
  const [recipe, setRecipe] = useState(null);

  const url = type === 'meal'
    ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`
    : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeID}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ [`${type}s`]: [retrievedRecipe] }) => setRecipe(retrievedRecipe));
  }, []);

  return recipe;
}
