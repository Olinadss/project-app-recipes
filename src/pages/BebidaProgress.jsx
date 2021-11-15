import React from 'react';
import { useParams } from 'react-router-dom';
import InProgressIngredients from '../components/InProgressIngredients';
import RecipeHeader from '../components/RecipeHeader';
import Instructions from '../components/Instructions';
import useFetchRecipe from '../hooks/useFetchRecipe';

export default function BebidaProgress() {
  const { idCocktails } = useParams();
  const { recipe, ingredients } = useFetchRecipe('drink', idCocktails);

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
            />
            <Instructions instructions={ recipe.strInstructions } />
          </div>
          <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
        </>
      )
      : null
  );
}
