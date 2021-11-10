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
import getIngredientsWithMeasures from '../utils/ingredients';

export default function ComidaDetalhe() {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then(({ meals: [retrievedMeal] }) => setMeal(retrievedMeal));
  }, []);

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
