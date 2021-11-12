import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import RecipeHeader from '../components/RecipeHeader';
import Instructions from '../components/Instructions';
import useFetchRecipe from '../hooks/useFetchRecipe';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function ComidaProgress() {
  const { idMeal } = useParams();
  const { recipe, ingredients } = useFetchRecipe('meal', idMeal);

  useEffect(() => {
    if (!ingredients) return;

    const ingredientList = Object.keys(ingredients);

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
  }, [ingredients]);

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
            <Ingredients
              ingredients={ ingredients }
              displayCheckbox
            />
            <Instructions instructions={ recipe.strInstructions } />
          </div>
          <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
        </>
      )
      : null
  );
}
