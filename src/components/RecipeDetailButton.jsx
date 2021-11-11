import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeDetailButton({ text }) {
  const styles = {
    position: 'fixed',
    bottom: '0px',
    right: '0px',
  };

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      style={ styles }
    >
      { text }
    </button>
  );
}

RecipeDetailButton.propTypes = {
  text: PropTypes.string.isRequired,
};
