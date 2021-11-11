import PropTypes from 'prop-types';
import React from 'react';

export default function Ingredients({ ingredients, displayCheckbox }) {
  const ingredientsInfo = Object.entries(ingredients);
  const dataTestId = displayCheckbox ? 'ingredient-step' : 'ingredient-name-and-measure';

  return (
    <div>
      <h4>Ingredientes</h4>
      {
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
      }
    </div>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.any).isRequired,
  displayCheckbox: PropTypes.bool,
};

Ingredients.defaultProps = {
  displayCheckbox: false,
};
