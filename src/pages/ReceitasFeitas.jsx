import React, { useEffect } from 'react';
import ReceitasProntas from '../components/receitas-prontas/ReceitasProntas';

export default function ReceitasFeitas() {
  const { receitasFeitas, setReceitasFeitas } = useState([]);
  useEffect(() => {
    const getLocalStorageDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setReceitasFeitas(getLocalStorageDoneRecipes);
  }, []);
  return (
    <div>
      <button data-testid="filter-by-all-btn" type="button">All</button>
      <button data-testid="filter-by-food-btn" type="button">Food</button>
      <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      <ReceitasProntas receitasProntas={ receitasFeitas } />
    </div>
  );
}
