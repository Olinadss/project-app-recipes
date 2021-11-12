import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ingredients from '../components/Ingredients';
import RecipeHeader from '../components/RecipeHeader';
import Instructions from '../components/Instructions';
import useFetchRecipe from '../hooks/useFetchRecipe';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function BebidaProgress() {
  const { idCocktails } = useParams();
  const { recipe, ingredients } = useFetchRecipe('drink', idCocktails);

  useEffect(() => {
    if (!ingredients) return;

    const ingredientList = Object.keys(ingredients);

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
  }, [ingredients]);

  // useEffect(() => {
  //   async function fetchFilteredMeal() {
  //     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktails}`);
  //     const data = await response.json();
  //     const drink = data.drinks[0];

  //     setIngredientsInfo(drink);
  //     setIngredientsAndMeasures(getIngredientsWithMeasures(drink));

  //     const ingredientList = Object.keys(getIngredientsWithMeasures(drink));

  //     const inProgressRecipes = getLocalStorage('inProgressRecipes');

  //     let drinksToLocalStorage = null;

  //     if (inProgressRecipes) {
  //       drinksToLocalStorage = {
  //         cocktails: {
  //           ...inProgressRecipes.cocktails, [idCocktails]: ingredientList,
  //         },
  //       };
  //     } else {
  //       drinksToLocalStorage = {
  //         cocktails: {
  //           [idCocktails]: ingredientList,
  //         },
  //       };
  //     }

  //     setLocalStorage(
  //       'inProgressRecipes', { ...inProgressRecipes, ...drinksToLocalStorage },
  //     );
  //   }
  //   fetchFilteredMeal();
  // }, []);

  return (
    ingredients
      ? (
        <>
          <div>
            <RecipeHeader
              id={ recipe.idDrink }
              type="bebida"
              category={ recipe.strCategory }
              alcoholicOrNot={ recipe.strAlcoholic }
              name={ recipe.strDrink }
              image={ recipe.strDrinkThumb }
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
