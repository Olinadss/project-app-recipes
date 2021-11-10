import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  Ingredients, Instructions, RecipeHeader, Recommendations, StartRecipeButton,
} from '../components';
import getIngredientsWithMeasures from '../utils/ingredients';

export default function BebidaDetalhe() {
  const { idCocktails } = useParams();
  const [drink, setDrink] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktails}`)
      .then((response) => response.json())
      .then(({ drinks: [retrievedDrink] }) => setDrink(retrievedDrink));
  }, []);

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
