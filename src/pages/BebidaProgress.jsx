import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import InProgressIngredients from '../components/InProgressIngredients';
import RecipeHeader from '../components/RecipeHeader';
import Instructions from '../components/Instructions';
import FinishRecipeButton from '../components/FinishRecipeButton';
import useFetchRecipe from '../hooks/useFetchRecipe';

export default function BebidaProgress() {
  const { idCocktails } = useParams();
  const { recipe, ingredients } = useFetchRecipe('drink', idCocktails);
  const [shouldDisableFinishRecipe, setShouldDisableFinishRecipe] = useState(true);

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
              setShouldDisableFinishRecipe={ setShouldDisableFinishRecipe }
            />
            <Instructions instructions={ recipe.strInstructions } />
          </div>
          <FinishRecipeButton disabled={ shouldDisableFinishRecipe } />
        </>
      )
      : null
  );
}
