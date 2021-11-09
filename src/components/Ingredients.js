import React from 'react';

export default function Ingredients({ ingredients, displayCheckbox }) {
  const ingredientsInfo = Object.entries(ingredients);
  console.log(ingredientsInfo);
  const dataTestId = displayCheckbox ? 'ingredient-step' : 'ingredient-name-and-measure';

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
        />

        {`${ingredient} - ${measure}`}
      </label>
    ))
  );
}
