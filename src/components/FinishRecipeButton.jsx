import React from 'react';
import PropTypes from 'prop-types';

export default function FinishRecipeButton({ disabled }) {
  return (
    <button
      type="button"
      disabled={ disabled }
      data-testid="finish-recipe-btn"
    >
      Finalizar Receita
    </button>
  );
}

FinishRecipeButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
};
