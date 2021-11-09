import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import HeaderRecipe from '../components/HeaderRecipe';
import getIngredientsWithMeasures from '../utils/ingredients';
import Instructions from '../components/Instructions';

export default function BebidaProgress() {
  const [ingredientsInfo, setIngredientsInfo] = useState({});
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState();
  const { idCocktails } = useParams();

  useEffect(() => {
    async function fetchFilteredMeal() {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktails}`);
      const data = await response.json();
      console.log(data);
      setIngredientsInfo(data.drinks[0]);
      setIngredientsAndMeasures(getIngredientsWithMeasures(data.drinks[0]));
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
