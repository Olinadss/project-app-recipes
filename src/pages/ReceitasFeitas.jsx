import React, { useEffect, useState } from 'react';
import ReceitasProntas from '../components/receitas-prontas/ReceitasProntas';
import { setLocalStorage } from '../utils/localStorage';
import { Header } from '../components';

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
  return (
    <div>
      <button data-testid="filter-by-all-btn" type="button">All</button>
      <button data-testid="filter-by-food-btn" type="button">Food</button>
      <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      {receitasFeitas && <ReceitasProntas receitasProntas={ receitasFeitas } />}
      <Header title="Receitas Feitas" search={ false } />
    </div>
  );
}
