import PropTypes from 'prop-types';
import React from 'react';

export default function CardTelaPrincipal({ index, thumb, name }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ thumb }
        alt={ `Foto de ${name}` }
        height="300"
        width="300"
      />
      <p data-testid={ `${index}-card-name` }>
        {name}
      </p>
    </div>
  );
}

CardTelaPrincipal.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
