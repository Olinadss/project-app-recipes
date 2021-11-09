import PropTypes from 'prop-types';
import React from 'react';

export default function ContainerExplorar({ type }) {
  return (
    <div>
      <button
        data-testid="explore-by-ingredient"
        type="button"
      >
        Por Ingredientes
      </button>
      {type === 'comida' && (
        <button
          data-testid="explore-by-area"
          type="button"
        >
          Por Local de Origem
        </button>
      )}
      <button
        data-testid="explore-surprise"
        type="button"
      >
        Me Surpreenda!
      </button>
    </div>
  );
}

ContainerExplorar.propTypes = {
  type: PropTypes.string.isRequired,
};
