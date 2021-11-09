import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

export default function HeaderRecipe({ name, category, thumb }) {
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
      <h4 data-testid="recipe-category">{ category }</h4>
      <ShareButton />
      <FavoriteButton />
    </div>
  );
}

HeaderRecipe.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  thumb: PropTypes.string,
}.isRequired;
