import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareRecipeButton from './ShareRecipeButton';
import ToggleFavoriteRecipeButton from './ToggleFavoriteRecipeButton';

export default function ReceitasFavoritasComidas(
  { receitasFavoritas, toggleFavoriteStatus, index },
) {
  return (
    <div>
      { receitasFavoritas.map((item) => (
        <>
          <Link to={ `comidas/${item.id}` }>
            <img
              src={ item.image }
              alt={ item.name }
              width="300"
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
          <Link to={ `comidas/${item.id}` }>
            <h2 data-testid={ `${index}-horizontal-name` }>{item.name}</h2>
          </Link>
          <h2
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${item.area} - ${item.category}`}
          </h2>
          <ShareRecipeButton
            parentPath="comidas"
            recipeID={ item.id }
            dataTestID={ `${index}-horizontal-share-btn` }
          />
          <ToggleFavoriteRecipeButton
            isFavorite
            onClick={ () => toggleFavoriteStatus(item.id) }
            dataTestID={ `${index}-horizontal-favorite-btn` }
          />
        </>
      ))}
    </div>
  );
}

ReceitasFavoritasComidas.propTypes = {
  receitasFavoritas: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}.isRequired;
