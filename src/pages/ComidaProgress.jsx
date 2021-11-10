import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useComidas from '../hooks/useComidas';
import Ingredients from '../components/Ingredients';
import HeaderRecipe from '../components/RecipeHeader';
import getIngredientsWithMeasures from '../utils/ingredients';

export default function ComidaProgress() {
  const [ingredients, setIngredients] = useState({});
  const [mealInfoToHeader, setMealInfoToHeader] = useState();
  const { idMeal } = useParams();
  const { comidas } = useComidas();

  if (comidas.length > 0 && Object.values(ingredients).length === 0) {
    const filteredMeal = comidas.find((comida) => comida.idMeal === idMeal);
    setMealInfoToHeader(filteredMeal);
    setIngredients(getIngredientsWithMeasures(filteredMeal));
  }

  return (
    comidas && mealInfoToHeader
      ? (
        <div>
          <HeaderRecipe
            name={ mealInfoToHeader.strMeal }
            category={ mealInfoToHeader.strCategory }
            thumb={ mealInfoToHeader.strMealThumb }
          />
          <Ingredients
            ingredients={ {} }
            // displayCheckbox
          />
        </div>
      )
      : null
  );
}
