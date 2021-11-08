import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import CardTelaPrincipal from '../components/CardTelaPrincipal';
import CategoriesButtons from '../components/CategoriesButtons';
import useBebidas from '../hooks/useBebidas';

export default function Bebidas() {
  const { bebidas, setUrlBebidas } = useBebidas();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data.drinks.map((category) => category.strCategory));
    }

    fetchCategories();
  }, []);

  const first12Drinks = bebidas.reduce((acc, comida, index) => {
    const NUMBER = 12;
    if (index < NUMBER) acc = [...acc, comida];
    return acc;
  }, []);

  function handleClick(category) {
    setUrlBebidas(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  }

  return (
    <div>
      <Header title="Bebidas" />
      <CategoriesButtons
        categories={ categories }
        handleClick={ handleClick }
      />
      <div className="container-md">
        {first12Drinks.map((meal, index) => (
          <CardTelaPrincipal
            key={ meal.idDrink }
            index={ index }
            thumb={ meal.strDrinkThumb }
            name={ meal.strDrink }
          />
        ))}
      </div>
    </div>
  );
}
