import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  Ingredients, Instructions, RecipeHeader, Recommendations, StartRecipeButton,
} from '../components';
import useFetchRecipe from '../hooks/useFetchRecipe';
import getIngredientsWithMeasures from '../utils/ingredients';

export default function BebidaDetalhe() {
  const { idCocktails } = useParams();
  const drink = useFetchRecipe('drink', idCocktails);
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    if (drink) {
      const ingredientsWithMeasures = getIngredientsWithMeasures(drink);
      setIngredients(ingredientsWithMeasures);
    }
  }, [drink]);

  return (
    <div>
      {
        ingredients
          ? (
            <>
              <RecipeHeader
                name={ drink.strDrink }
                category={ drink.strCategory }
                thumb={ drink.strDrinkThumb }
                drinkType={ drink.strAlcoholic }
              />
              <Ingredients ingredients={ ingredients } />
              <Instructions instructions={ drink.strInstructions } />
              <Recommendations type="meals" />
              <StartRecipeButton />
            </>
          ) : null
      }
    </div>
  );
}
