import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecommendationCard from './RecommendationCard';
import '../styles/Recommendations.css';

export default function Recommendations({ type }) {
  const [recommendations, setRecommendations] = useState([]);
  const cardAmount = 6;
  const url = type === 'meals'
    ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ [type]: recipes }) => recipes.filter((_, index) => index < cardAmount))
      .then((filteredRecipes) => setRecommendations(filteredRecipes));
  }, []);

  return (
    <div>
      <h4>Recomendadas</h4>
      <div className="Recommendations">
        {recommendations.map((recommendation, index) => (
          <RecommendationCard key={ index } index={ index } recipe={ recommendation } />
        ))}
      </div>
    </div>
  );
}

Recommendations.propTypes = {
  type: PropTypes.string.isRequired,
};
