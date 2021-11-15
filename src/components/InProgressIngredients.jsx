import React, { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import '../styles/InProgressIngredients.css';

export default function InProgressIngredients(
  { id, ingredients, inProgressRecipesKey },
) {
  // Início do setup do estado inicial de acordo com o que existe no localStorage
  const ingredientsNames = Object.keys(ingredients);
  const defaultIngredientsStatusState = ingredientsNames.reduce(
    (status, ingredient) => ({ ...status, [ingredient]: false }),
    {},
  );

  const inProgressRecipes = getLocalStorage('inProgressRecipes');
  const getInitialStateFromInProgressRecipes = () => {
    const usedIngredients = inProgressRecipes[inProgressRecipesKey][id];

    return ingredientsNames.reduce(
      (status, ingredient) => (
        {
          ...status,
          [ingredient]: usedIngredients.includes(ingredient),
        }
      ),
      {},
    );
  };

  let initialIngredientsStatusState = defaultIngredientsStatusState;
  if (inProgressRecipes && inProgressRecipes[inProgressRecipesKey][id]) {
    initialIngredientsStatusState = getInitialStateFromInProgressRecipes();
  }

  const [
    ingredientsStatus, setIngredientsStatus,
  ] = useState(initialIngredientsStatusState);
  // Fim do setup do estado inicial

  const formatForHTML = (targetString) => (
    targetString.toLowerCase().split(' ').join('-')
  );

  const handleChange = ({ target }) => {
    setIngredientsStatus({ ...ingredientsStatus, [target.id]: target.checked });
  };

  // Risca os ingredientes com as checkboxes selecionadas
  useEffect(() => {
    Object.entries(ingredientsStatus).forEach(([ingredientName, status]) => {
      const ingredientLabelClass = `${formatForHTML(ingredientName)}-label`;
      const ingredientLabel = document.querySelector(`.${ingredientLabelClass}`);
      if (status) {
        ingredientLabel.classList.add('checkedIngredient');
      } else {
        ingredientLabel.classList.remove('checkedIngredient');
      }
    });
  }, [ingredientsStatus]);

  // Atualiza o localStorage
  useEffect(() => {
    const newInProgressRecipes = getLocalStorage('inProgressRecipes');
    const newLocalStorageIngredientsStatus = Object.entries(ingredientsStatus).reduce(
      (usedIngredients, [ingredientName, status]) => (
        status
          ? [...usedIngredients, ingredientName]
          : usedIngredients
      ),
      [],
    );

    newInProgressRecipes[inProgressRecipesKey][id] = newLocalStorageIngredientsStatus;
    setLocalStorage('inProgressRecipes', newInProgressRecipes);
  }, [ingredientsStatus]);

  return (
    Object.entries(ingredients).map(([ingredient, measure], index) => (
      <label
        key={ index }
        htmlFor={ ingredient }
        className={ `${formatForHTML(ingredient)}-label` }
        style={ { display: 'block' } }
        data-testid={ `${index}-ingredient-step` }
      >
        <input
          id={ ingredient }
          type="checkbox"
          defaultChecked={ ingredientsStatus[ingredient] }
          onChange={ handleChange }
        />
        {`${ingredient} - ${measure}`}
      </label>
    ))
  );
}
