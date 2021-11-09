import React, { useEffect, useState } from 'react';
import { setLocalStorage } from '../utils/localStorage';
import { Header } from '../components';
import ReceitasProntasComidas
  from '../components/receitas-prontas/ReceitasProntasComidas';
import ReceitasProntasBebidas
  from '../components/receitas-prontas/ReceitasProntasBebidas';

export default function ReceitasFeitas() {
  const [receitasFeitas, setReceitasFeitas] = useState([]);
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
    const getLocalStorageDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setReceitasFeitas(getLocalStorageDoneRecipes);
  }, []);

  function filterReceitas() {
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

  return (
    <div>
      <Header title="Receitas Feitas" search={ false } />
      <button data-testid="filter-by-all-btn" type="button">All</button>
      <button data-testid="filter-by-food-btn" type="button">Food</button>
      <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      {receitasFeitas && filterReceitas() }

    </div>
  );
}
