import React from 'react';
import PropTypes from 'prop-types';
import ShareRecipeButton from './ShareRecipeButton';
import FavoriteButton from './FavoriteButton';

export default function RecipeHeader({ id, name, category, thumb, drinkType }) {
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
      <h5 data-testid="recipe-category">{ drinkType || category }</h5>
      <ShareRecipeButton
        parentPath={ drinkType ? 'bebidas' : 'comidas' }
        recipeID={ id }
        dataTestID="share-btn"
      />
      <FavoriteButton />
    </div>
  );
}

RecipeHeader.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  drinkType: PropTypes.string,
};

RecipeHeader.defaultProps = {
  drinkType: '',
};
