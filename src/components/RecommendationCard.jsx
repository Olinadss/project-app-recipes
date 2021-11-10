import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RecommendationCard.css';

export default function RecommendationCard({ index, recipe }) {
  const {
    strMeal,
    strMealThumb,
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
  } = recipe;
  const recipeName = strMeal || strDrink;
  const recipeThumb = strMealThumb || strDrinkThumb;
  const recipeCategory = strAlcoholic || strCategory;

  return (
    <div
      className="RecommendationCard"
      data-testid={ `${index}-recomendation-card` }
    >
      <img
        src={ recipeThumb }
        alt={ `Imagem de ${recipeName}` }
      />
      <h5 data-testid={ `${index}-recomendation-title` }>{ recipeName }</h5>
      <h6>{ recipeCategory }</h6>
    </div>
  );
}

RecommendationCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};
