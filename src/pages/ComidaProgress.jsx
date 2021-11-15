import React from 'react';
import { useParams } from 'react-router-dom';
import InProgressIngredients from '../components/InProgressIngredients';
import RecipeHeader from '../components/RecipeHeader';
import Instructions from '../components/Instructions';
import useFetchRecipe from '../hooks/useFetchRecipe';

export default function ComidaProgress() {
  const { idMeal } = useParams();
  const { recipe, ingredients } = useFetchRecipe('meal', idMeal);

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
            />
            <Instructions instructions={ recipe.strInstructions } />
          </div>
          <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
        </>
      )
      : null
  );
}
