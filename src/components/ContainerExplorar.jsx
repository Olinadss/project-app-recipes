import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ContainerExplorar({ type }) {
  const history = useHistory();

  function handleClick(route) {
    history.push(route);
  }

  return (
    <div>
      <button
        data-testid="explore-by-ingredient"
        type="button"
        onClick={ () => handleClick(`/explorar/${type}/ingredientes`) }
      >
        Por Ingredientes
      </button>
      {type === 'comidas' && (
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
