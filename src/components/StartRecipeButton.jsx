import React from 'react';

export default function StartRecipeButton() {
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
      Iniciar Receita
    </button>
  );
}
