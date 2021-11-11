import React from 'react';
import { useParams } from 'react-router';
import {
  Ingredients, Instructions, RecipeHeader, Recommendations, RecipeDetailButton,
} from '../components';
import useFetchRecipe from '../hooks/useFetchRecipe';

export default function BebidaDetalhe() {
  const { idCocktails } = useParams();

  const {
    recipe, ingredients, recipeIsDone, recipeIsInProgress,
  } = useFetchRecipe('drink', idCocktails);

  const buttonText = recipeIsInProgress ? 'Continuar Receita' : 'Iniciar receita';

  return (
    <div>
      {
        ingredients
          ? (
            <>
              <RecipeHeader
                name={ recipe.strDrink }
                category={ recipe.strCategory }
                thumb={ recipe.strDrinkThumb }
                drinkType={ recipe.strAlcoholic }
              />
              <Ingredients ingredients={ ingredients } />
              <Instructions instructions={ recipe.strInstructions } />
              <Recommendations type="meals" />
              {recipeIsDone ? null : <RecipeDetailButton text={ buttonText } /> }
            </>
          ) : null
      }
    </div>
  );
}
