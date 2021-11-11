import React from 'react';
import { Header, ToggleFavoriteRecipeButton } from '../components';
import useFavoriteRecipes from '../hooks/useFavoriteRecipes';

export default function ReceitasFavoritas() {
  /*
    Exemplo de como usar o custom hook useFavoriteRecipes para recuperar
    as receitas favoritas. Você pode testar acessando os detalhes de
    algumas receitas, favoritando-as e recarregando esta página.
  */
  const { favoriteRecipes, toggleFavoriteStatus } = useFavoriteRecipes();

  return (
    <div>
      <Header title="Receitas Favoritas" search={ false } />
      {
        favoriteRecipes.map(({ id, name }, index) => (
          <div key={ index }>
            <span>{name}</span>
            <ToggleFavoriteRecipeButton
              isFavorite
              onClick={ () => toggleFavoriteStatus(id) }
            />
          </div>
        ))
      }
    </div>
  );
}
