import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecommendationCard from './RecommendationCard';

export default function Recommendations({ type }) {
  const [recommendations, setRecommendations] = useState([]);
  const url = type === 'meals'
    ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ [type]: recipes }) => setRecommendations(recipes));
  }, []);

  return (
    <div>
      {recommendations.map((recommendation, index) => (
        <RecommendationCard key={ index } index={ index } />
      ))}
    </div>
  );
}

Recommendations.propTypes = {
  type: PropTypes.string.isRequired,
};
