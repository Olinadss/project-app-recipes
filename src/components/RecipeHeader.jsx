import React from 'react';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

export default function RecipeHeader({ name, category, thumb, drinkType }) {
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ thumb }
        alt={ `Imagem de ${name}` }
        height="300"
        width="300"
      />
      <h2 data-testid="recipe-title">{ name }</h2>
      <h4 data-testid="recipe-category">{drinkType || category}</h4>
      <ShareButton />
      <FavoriteButton />
    </div>
  );
}

RecipeHeader.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  drinkType: PropTypes.string,
};

RecipeHeader.defaultProps = {
  drinkType: '',
};
