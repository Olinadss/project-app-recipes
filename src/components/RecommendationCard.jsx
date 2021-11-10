import React from 'react';
import PropTypes from 'prop-types';

export default function RecommendationCard({ index }) {
  return (
    <div data-testid={ `${index}-recomendation-card` }>
      {`Card ${index}`}
    </div>
  );
}

RecommendationCard.propTypes = {
  index: PropTypes.number.isRequired,
};
