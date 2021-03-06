import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeDetailButton({ text, onClick }) {
  const styles = {
    position: 'fixed',
    bottom: '0px',
    left: '50%',
    transform: 'translate(-50%, 0)',
  };

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      style={ styles }
      onClick={ onClick }
    >
      { text }
    </button>
  );
}

RecipeDetailButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
