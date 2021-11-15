import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InProgressIngredients from '../components/InProgressIngredients';
import RecipeHeader from '../components/RecipeHeader';
import Instructions from '../components/Instructions';
import FinishRecipeButton from '../components/FinishRecipeButton';
import useFetchRecipe from '../hooks/useFetchRecipe';
import { getLocalStorage } from '../utils/localStorage';

export default function ComidaProgress() {
  const { idMeal } = useParams();
  const { recipe, ingredients } = useFetchRecipe('meal', idMeal);
  const [allStepsCompleted, setAllStepsCompleted] = useState(false);
  const [recipeDone, setRecipeDone] = useState(false);

  useEffect(() => {
    const doneRecipes = getLocalStorage('doneRecipes');

    if (doneRecipes.some(({ id }) => id === idMeal)) setRecipeDone(true);
  }, []);

  return (
    ingredients
      ? (
        <>
          <div>
            <RecipeHeader
              id={ recipe.idMeal }
              type="comida"
              area={ recipe.strArea }
              category={ recipe.strCategory }
              name={ recipe.strMeal }
              image={ recipe.strMealThumb }
            />
            <InProgressIngredients
              id={ recipe.idMeal }
              inProgressRecipesKey="meals"
              ingredients={ ingredients }
              setAllStepsCompleted={ setAllStepsCompleted }
            />
            <Instructions instructions={ recipe.strInstructions } />
          </div>
          <FinishRecipeButton
            recipe={ recipe }
            type="comida"
            allStepsCompleted={ allStepsCompleted }
            recipeDone={ recipeDone }
          />
        </>
      )
      : null
  );
}
