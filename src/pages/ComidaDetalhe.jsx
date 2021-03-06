import React from 'react';
import { useParams, useHistory } from 'react-router';
import {
  Ingredients,
  Instructions,
  RecipeHeader,
  YouTubeVideo,
  Recommendations,
  RecipeDetailButton,
} from '../components';
import useFetchRecipe from '../hooks/useFetchRecipe';
import '../styles/Detalhes.css';

export default function ComidaDetalhe() {
  const { idMeal } = useParams();
  const history = useHistory();

  const {
    recipe, ingredients, recipeIsDone, recipeIsInProgress,
  } = useFetchRecipe('meal', idMeal);

  const buttonText = recipeIsInProgress ? 'Continuar Receita' : 'Iniciar receita';
  const handleClick = () => history.push(`/comidas/${idMeal}/in-progress`);

  return (
    <div>
      {
        ingredients
          ? (
            <>
              <RecipeHeader
                id={ recipe.idMeal }
                type="comida"
                area={ recipe.strArea }
                category={ recipe.strCategory }
                name={ recipe.strMeal }
                image={ recipe.strMealThumb }
              />
              <Ingredients ingredients={ ingredients } />
              <Instructions instructions={ recipe.strInstructions } />
              <YouTubeVideo url={ recipe.strYoutube } />
              <Recommendations type="drinks" />
              {
                recipeIsDone
                  ? null
                  : (
                    <RecipeDetailButton
                      text={ buttonText }
                      onClick={ handleClick }
                    />
                  )
              }
            </>
          ) : null
      }
    </div>
  );
}
