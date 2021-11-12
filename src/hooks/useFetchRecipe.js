import { useEffect, useState } from 'react';
import getIngredientsWithMeasures from '../utils/ingredients';
import { getLocalStorage } from '../utils/localStorage';

export default function useFetchRecipe(type, recipeID) {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [recipeIsDone, setRecipeIsDone] = useState(null);
  const [recipeIsInProgress, setRecipeIsInProgress] = useState(null);

  const url = type === 'meal'
    ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`
    : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeID}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ [`${type}s`]: [retrievedRecipe] }) => setRecipe(retrievedRecipe));
  }, []);

  useEffect(() => {
    if (recipe) {
      const ingredientsWithMeasures = getIngredientsWithMeasures(recipe);
      setIngredients(ingredientsWithMeasures);
    }
  }, [recipe]);

  useEffect(() => {
    if (recipe) {
      const doneRecipes = getLocalStorage('doneRecipes');
      const allInProgressRecipes = getLocalStorage('inProgressRecipes');
      const targetInProgressRecipesKey = type === 'meal' ? 'meals' : 'cocktails';

      const {
        [targetInProgressRecipesKey]: targetInProgressRecipes,
      } = allInProgressRecipes || { [targetInProgressRecipesKey]: null };

      const targetInProgressRecipesIDs = targetInProgressRecipes
        && Object.keys(targetInProgressRecipes);

      const recipeIsDoneToBeSet = doneRecipes && doneRecipes.some(
        ({ id }) => id === recipe.id,
      );

      const recipeIsInProgressToBeSet = targetInProgressRecipesIDs
        && targetInProgressRecipesIDs.some(
          ({ id }) => id === recipe.id,
        );

      setRecipeIsDone(recipeIsDoneToBeSet);
      setRecipeIsInProgress(recipeIsInProgressToBeSet);
    }
  }, [recipe]);

  return { recipe, ingredients, recipeIsDone, recipeIsInProgress };
}
