import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import ReceitasProntasComidas
  from '../components/receitas-prontas/ReceitasProntasComidas';
import ReceitasProntasBebidas
  from '../components/receitas-prontas/ReceitasProntasBebidas';

export default function ReceitasFeitas() {
  const [receitasFeitas, setReceitasFeitas] = useState([]);
  const [isComida, setIsComida] = useState(false);
  const [isBebida, setIsBebida] = useState(false);

  useEffect(() => {
    const localStorageDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setReceitasFeitas(localStorageDoneRecipes);
  }, []);

  function renderReceitas() {
    return receitasFeitas.map((receita, index) => {
      if (receita.type === 'comida') {
        return (<ReceitasProntasComidas
          key={ receita.id }
          index={ index }
          receitasProntas={ [receita] }
        />);
      }
      return (<ReceitasProntasBebidas
        key={ receita.id }
        index={ index }
        receitasProntas={ [receita] }
      />);
    });
  }

  function renderBebida() {
    return receitasFeitas.filter((receita) => receita.type === 'bebida')
      .map((receita, index) => (<ReceitasProntasBebidas
        key={ receita.id }
        index={ index }
        receitasProntas={ [receita] }
      />));
  }

  function renderComida() {
    return receitasFeitas.filter((receita) => receita.type === 'comida')
      .map((receita, index) => (
        <ReceitasProntasComidas
          key={ receita.id }
          index={ index }
          receitasProntas={ [receita] }
        />));
  }

  function handleClickFilterBebida() {
    setIsComida(false);
    setIsBebida(true);
  }

  function handleClickFilterComida() {
    setIsComida(true);
    setIsBebida(false);
  }

  function handleClickFilterAll() {
    setIsComida(false);
    setIsBebida(false);
  }

  return (
    <div>
      <Header title="Receitas Feitas" search={ false } />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ handleClickFilterAll }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ handleClickFilterComida }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ handleClickFilterBebida }
      >
        Drinks
      </button>
      {receitasFeitas && !isBebida && !isComida && renderReceitas() }
      {receitasFeitas && isComida
        && renderComida() }
      {receitasFeitas && isBebida
        && renderBebida() }

    </div>
  );
}
