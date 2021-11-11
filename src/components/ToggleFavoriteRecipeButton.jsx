import React from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHearIcon from '../images/whiteHeartIcon.svg';

export default function ToggleFavoriteRecipeButton({ checked, onClick, dataTestID }) {
  return (
    <input
      type="image"
      src={ checked ? blackHeartIcon : whiteHearIcon }
      alt="Favoritar receita"
      onClick={ onClick }
      data-testid={ dataTestID }
    />
  );
}

ToggleFavoriteRecipeButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  dataTestID: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
