import React from 'react';
import { useParams } from 'react-router';
import {
  Ingredients,
  Instructions,
  RecipeHeader,
  YouTubeVideo,
  Recommendations,
  RecipeDetailButton,
} from '../components';
import useFetchRecipe from '../hooks/useFetchRecipe';

export default function ComidaDetalhe() {
  const { idMeal } = useParams();

  const {
    recipe, ingredients, recipeIsDone, recipeIsInProgress,
  } = useFetchRecipe('meal', idMeal);

  const buttonText = recipeIsInProgress ? 'Continuar Receita' : 'Iniciar receita';

  return (
    <div>
      {
        ingredients
          ? (
            <>
              <RecipeHeader
                name={ recipe.strMeal }
                category={ recipe.strCategory }
                thumb={ recipe.strMealThumb }
              />
              <Ingredients ingredients={ ingredients } />
              <Instructions instructions={ recipe.strInstructions } />
              <YouTubeVideo url={ recipe.strYoutube } />
              <Recommendations type="drinks" />
              {recipeIsDone ? null : <RecipeDetailButton text={ buttonText } /> }
            </>
          ) : null
      }
    </div>
  );
}
