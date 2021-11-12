import React, { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function Ingredients({ ingredients, displayCheckbox }) {
  const defaultIngredientsStatusState = Object.keys(ingredients).reduce(
    (ingredientsStatus, ingredient) => ({ ...ingredientsStatus, [ingredient]: false }),
    {},
  );

  const localStorageIngredientsStatus = getLocalStorage('ingredientsStatus');
  const initialIngredientsStatusState = localStorageIngredientsStatus
    || defaultIngredientsStatusState;

  const [
    ingredientsStatus, setIngredientsStatus,
  ] = useState(initialIngredientsStatusState);

  const handleChange = ({ target }) => {
    setIngredientsStatus({ ...ingredientsStatus, [target.id]: target.checked });
  };

  useEffect(() => {
    setLocalStorage('ingredientsStatus', ingredientsStatus);
  }, [ingredientsStatus]);

  const dataTestId = displayCheckbox ? 'ingredient-step' : 'ingredient-name-and-measure';

  return (
    Object.entries(ingredients).map(([ingredient, measure], index) => (
      <label
        data-testid={ `${index}-${dataTestId}` }
        key={ index }
        htmlFor={ ingredient }
        style={ { display: 'block' } }
      >
        { displayCheckbox ? '' : '- '}

        <input
          id={ ingredient }
          type="checkbox"
          defaultChecked={ ingredientsStatus[ingredient] }
          onChange={ handleChange }
          style={ displayCheckbox ? {} : { display: 'none' } }
        />

        {`${ingredient} - ${measure}`}
      </label>
    ))
  );
}
