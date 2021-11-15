import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InProgressIngredients from '../components/InProgressIngredients';
import RecipeHeader from '../components/RecipeHeader';
import Instructions from '../components/Instructions';
import FinishRecipeButton from '../components/FinishRecipeButton';
import useFetchRecipe from '../hooks/useFetchRecipe';
import { getLocalStorage } from '../utils/localStorage';

export default function BebidaProgress() {
  const { idCocktails } = useParams();
  const { recipe, ingredients } = useFetchRecipe('drink', idCocktails);
  const [allStepsCompleted, setAllStepsCompleted] = useState(false);
  const [recipeDone, setRecipeDone] = useState(false);

  useEffect(() => {
    const doneRecipes = getLocalStorage('doneRecipes');

    if (doneRecipes.some(({ id }) => id === idCocktails)) setRecipeDone(true);
  }, []);

  return (
    ingredients
      ? (
        <>
          <div>
            <RecipeHeader
              id={ recipe.idDrink }
              type="bebida"
              category={ recipe.strCategory }
              alcoholicOrNot={ recipe.strAlcoholic }
              name={ recipe.strDrink }
              image={ recipe.strDrinkThumb }
            />
            <InProgressIngredients
              id={ recipe.idDrink }
              inProgressRecipesKey="cocktails"
              ingredients={ ingredients }
              setAllStepsCompleted={ setAllStepsCompleted }
            />
            <Instructions instructions={ recipe.strInstructions } />
          </div>
          <FinishRecipeButton
            recipe={ recipe }
            type="bebida"
            allStepsCompleted={ allStepsCompleted }
            recipeDone={ recipeDone }
          />
        </>
      )
      : null
  );
}
