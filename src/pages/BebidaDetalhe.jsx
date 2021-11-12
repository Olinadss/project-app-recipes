import React from 'react';
import { useParams, useHistory } from 'react-router';
import {
  Ingredients, Instructions, RecipeHeader, Recommendations, RecipeDetailButton,
} from '../components';
import useFetchRecipe from '../hooks/useFetchRecipe';

export default function BebidaDetalhe() {
  const { idCocktails } = useParams();
  const history = useHistory();

  const {
    recipe, ingredients, recipeIsDone, recipeIsInProgress,
  } = useFetchRecipe('drink', idCocktails);

  const buttonText = recipeIsInProgress ? 'Continuar Receita' : 'Iniciar receita';
  const handleClick = () => history.push(`/bebidas/${idCocktails}/in-progress`);

  return (
    <div>
      {
        ingredients
          ? (
            <>
              <RecipeHeader
                id={ recipe.idDrink }
                type="bebida"
                category={ recipe.strCategory }
                alcoholicOrNot={ recipe.strAlcoholic }
                name={ recipe.strDrink }
                image={ recipe.strDrinkThumb }
              />
              <Ingredients ingredients={ ingredients } />
              <Instructions instructions={ recipe.strInstructions } />
              <Recommendations type="meals" />
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
