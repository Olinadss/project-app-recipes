import React from 'react';
import { useParams } from 'react-router';
import {
  Ingredients, Instructions, RecipeHeader, Recommendations, StartRecipeButton,
} from '../components';
import useFetchRecipe from '../hooks/useFetchRecipe';

export default function BebidaDetalhe() {
  const { idCocktails } = useParams();
  const { recipe, ingredients } = useFetchRecipe('drink', idCocktails);

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
              <StartRecipeButton />
            </>
          ) : null
      }
    </div>
  );
}
