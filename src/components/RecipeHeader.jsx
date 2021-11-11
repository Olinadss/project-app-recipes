import React from 'react';
import PropTypes from 'prop-types';
import ShareRecipeButton from './ShareRecipeButton';
import ToggleFavoriteRecipeButton from './ToggleFavoriteRecipeButton';
import useFavoriteRecipes from '../hooks/useFavoriteRecipes';

export default function RecipeHeader(
  { id, type, area, category, alcoholicOrNot, name, image },
) {
  const { getFavoriteStatusByID, toggleFavoriteStatus } = useFavoriteRecipes();

  const handleClick = () => {
    const isFavoriteRecipe = getFavoriteStatusByID(id);

    if (isFavoriteRecipe) {
      toggleFavoriteStatus(id);
    } else {
      const newFavoriteRecipe = {
        id,
        type,
        area: area || '',
        category,
        alcoholicOrNot: alcoholicOrNot || '',
        name,
        image,
      };

      toggleFavoriteStatus(id, newFavoriteRecipe);
    }
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ image }
        alt={ `Imagem de ${name}` }
        height="300"
        width="300"
      />
      <h2 data-testid="recipe-title">{ name }</h2>
      <h5 data-testid="recipe-category">{ alcoholicOrNot || category }</h5>
      <ShareRecipeButton
        parentPath={ `${type}s` }
        recipeID={ id }
        dataTestID="share-btn"
      />
      <ToggleFavoriteRecipeButton
        checked={ getFavoriteStatusByID(id) }
        onClick={ handleClick }
        dataTestID="favorite-btn"
      />
    </div>
  );
}

RecipeHeader.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  area: PropTypes.string,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

RecipeHeader.defaultProps = {
  area: '',
  alcoholicOrNot: '',
};
