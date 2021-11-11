import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import RecommendationCard from './RecommendationCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const settings = { slidesToShow: 2, infinite: false };

  return (
    <div>
      <h4>Recomendadas</h4>
      <Slider { ...settings }>
        {recommendations.map((recommendation, index) => (
          <RecommendationCard key={ index } index={ index } recipe={ recommendation } />
        ))}
      </Slider>
    </div>
  );
}

Recommendations.propTypes = {
  type: PropTypes.string.isRequired,
};
