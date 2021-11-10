import PropTypes from 'prop-types';
import React from 'react';

export default function CardIngredientes({ index, name, image }) {
  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ image }
        alt="Foto do ingrediente"
        width="300"
        height="300"
      />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

CardIngredientes.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
