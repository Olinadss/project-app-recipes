import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function FinishRecipeButton({ disabled }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/receitas-feitas');
  };

  return (
    <button
      type="button"
      onClick={ handleClick }
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
