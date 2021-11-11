import React from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHearIcon from '../images/whiteHeartIcon.svg';

export default function ToggleFavoriteRecipeButton({ isFavorite, onClick, dataTestID }) {
  return (
    <input
      type="image"
      src={ isFavorite ? blackHeartIcon : whiteHearIcon }
      alt="Favoritar receita"
      onClick={ onClick }
      data-testid={ dataTestID }
    />
  );
}

ToggleFavoriteRecipeButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  dataTestID: PropTypes.string.isRequired,
};
