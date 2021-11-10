import React, { Component } from 'react';

export default class StartRecipeButton extends Component {
  render() {
    return (
      <button type="button" data-testid="start-recipe-btn">
        Iniciar Receita
      </button>
    );
  }
}
