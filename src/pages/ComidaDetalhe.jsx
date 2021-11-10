import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  Ingredients,
  Instructions,
  RecipeHeader,
  YouTubeVideo,
  Recommendations,
  StartRecipeButton,
} from '../components';
import useFetchRecipe from '../hooks/useFetchRecipe';
import getIngredientsWithMeasures from '../utils/ingredients';

export default function ComidaDetalhe() {
  const { idMeal } = useParams();
  const meal = useFetchRecipe('meal', idMeal);
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    if (meal) {
      const ingredientsWithMeasures = getIngredientsWithMeasures(meal);
      setIngredients(ingredientsWithMeasures);
    }
  }, [meal]);

  return (
    <div>
      {
        ingredients
          ? (
            <>
              <RecipeHeader
                name={ meal.strMeal }
                category={ meal.strCategory }
                thumb={ meal.strMealThumb }
              />
              <Ingredients ingredients={ ingredients } />
              <Instructions instructions={ meal.strInstructions } />
              <YouTubeVideo url={ meal.strYoutube } />
              <Recommendations type="drinks" />
              <StartRecipeButton />
            </>
          ) : null
      }
    </div>
  );
}
