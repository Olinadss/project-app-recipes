import React from 'react';
import PropTypes from 'prop-types';

export default function Ingredients({ ingredients }) {
  return (
    <ul>
      {
        Object.entries(ingredients).map(([ingredient, measure], index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient} - ${measure}`}
          </li>
        ))
      }
    </ul>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.string).isRequired,
};
