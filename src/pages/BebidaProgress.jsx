import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import HeaderRecipe from '../components/HeaderRecipe';
import getIngredientsWithMeasures from '../utils/ingredients';
import Instructions from '../components/Instructions';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function BebidaProgress() {
  const [ingredientsInfo, setIngredientsInfo] = useState({});
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState();
  const { idCocktails } = useParams();

  useEffect(() => {
    async function fetchFilteredMeal() {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktails}`);
      const data = await response.json();
      const drink = data.drinks[0];

      setIngredientsInfo(drink);
      setIngredientsAndMeasures(getIngredientsWithMeasures(drink));

      const ingredientList = Object.keys(getIngredientsWithMeasures(drink));

      const inProgressRecipes = getLocalStorage('inProgressRecipes');

      let drinksToLocalStorage = null;

      if (inProgressRecipes) {
        drinksToLocalStorage = {
          cocktails: {
            ...inProgressRecipes.cocktails, [idCocktails]: ingredientList,
          },
        };
      } else {
        drinksToLocalStorage = {
          cocktails: {
            [idCocktails]: ingredientList,
          },
        };
      }

      setLocalStorage(
        'inProgressRecipes', { ...inProgressRecipes, ...drinksToLocalStorage },
      );
    }
    fetchFilteredMeal();
  }, []);

  return (
    ingredientsAndMeasures
      ? (
        <>
          <div>
            <HeaderRecipe
              name={ ingredientsInfo.strDrink }
              category={ ingredientsInfo.strAlcoholic }
              thumb={ ingredientsInfo.strDrinkThumb }
            />
            <Ingredients
              ingredients={ ingredientsAndMeasures }
              displayCheckbox
            />
            <Instructions instructions={ ingredientsInfo.strInstructions } />
          </div>
          <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
        </>
      )
      : null
  );
}
