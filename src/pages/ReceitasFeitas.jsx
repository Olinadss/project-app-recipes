import React, { useEffect, useState } from 'react';
import { setLocalStorage } from '../utils/localStorage';
import { Header } from '../components';
import ReceitasProntasComidas
  from '../components/receitas-prontas/ReceitasProntasComidas';
import ReceitasProntasBebidas
  from '../components/receitas-prontas/ReceitasProntasBebidas';

export default function ReceitasFeitas() {
  const [receitasFeitas, setReceitasFeitas] = useState([]);
  // const [receitaBebidas, setReceitaBebidas] = useState([]);
  // const [receitaComidas, setReceitaComidas] = useState([]);
  const [isComida, setIsComida] = useState(false);
  const [isBebida, setIsBebida] = useState(false);

  const array = [{
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
  ];

  useEffect(() => {
    setLocalStorage('doneRecipes', array);
  }, []);

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

  // function filterBebida() {
  //   setIsComida(false);
  //   setIsBebida(true);
  //   const filterBebidas = receitasFeitas.filter((comidas) => comidas.type === 'bebida');
  //   setReceitaBebidas(filterBebidas);
  // }

  // function filterComida() {
  //   setIsComida(true);
  //   setIsBebida(false);
  //   const filterComidas = receitasFeitas.filter((comidas) => comidas.type === 'comida');
  //   setReceitaComidas(filterComidas);
  // }

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
    console.log('clicou');
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
