import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import HeaderRecipe from '../components/HeaderRecipe';
import getIngredientsWithMeasures from '../utils/ingredients';
import Instructions from '../components/Instructions';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function ComidaProgress() {
  const [ingredientsInfo, setIngredientsInfo] = useState({});
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState();
  const { idMeal } = useParams();

  useEffect(() => {
    async function fetchFilteredMeal() {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await response.json();
      const meal = data.meals[0];

      setIngredientsInfo(meal);
      setIngredientsAndMeasures(getIngredientsWithMeasures(meal));

      const ingredientList = Object.keys(getIngredientsWithMeasures(meal));

      const inProgressRecipes = getLocalStorage('inProgressRecipes');

      let mealToLocalStorage = null;

      if (inProgressRecipes) {
        mealToLocalStorage = {
          meals: {
            ...inProgressRecipes.meals, [idMeal]: ingredientList,
          },
        };
      } else {
        mealToLocalStorage = {
          meals: {
            [idMeal]: ingredientList,
          },
        };
      }

      setLocalStorage(
        'inProgressRecipes', { ...inProgressRecipes, ...mealToLocalStorage },
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
              name={ ingredientsInfo.strMeal }
              category={ ingredientsInfo.strCategory }
              thumb={ ingredientsInfo.strMealThumb }
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
