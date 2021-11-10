import React, { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function Ingredients({ ingredients, displayCheckbox }) {
  const [checkeds, setCheckeds] = useState([]);

  const ingredientsInfo = Object.entries(ingredients);
  const dataTestId = displayCheckbox ? 'ingredient-step' : 'ingredient-name-and-measure';

  function saveChecked({ target }) {
    const itemsChecked = getLocalStorage('checked');

    if (target.checked) {
      setLocalStorage('checked', { ...itemsChecked, [target.id]: target.checked });
    } else {
      const keysToFilter = Object.keys(itemsChecked);
      const filteredKey = keysToFilter.filter((key) => key === target.id);

      setLocalStorage('checked', { ...itemsChecked, [filteredKey]: false });
    }
  }

  return (
    ingredientsInfo.map(([ingredient, measure], index) => (
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
          style={ displayCheckbox ? {} : { display: 'none' } }
          onClick={ (event) => saveChecked(event) }
        />

        {`${ingredient} - ${measure}`}
      </label>
    ))
  );
}
