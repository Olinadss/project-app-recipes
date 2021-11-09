import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import CardTelaPrincipal from '../components/CardTelaPrincipal';
import CategoriesButtons from '../components/CategoriesButtons';
import useComidas from '../hooks/useComidas';

export default function Recipes() {
  const { comidas, setUrlComidas } = useComidas();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data.meals.map((category) => category.strCategory));
    }

    fetchCategories();
  }, []);

  const first12Meals = comidas.reduce((acc, comida, index) => {
    const NUMBER = 12;
    if (index < NUMBER) acc = [...acc, comida];
    return acc;
  }, []);

  function handleClick(category) {
    setUrlComidas(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  }

  function handleClickIsClicked() {
    setUrlComidas('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }

  return (
    <div>
      <Header title="Comidas" />
      <CategoriesButtons
        categories={ categories }
        handleClick={ handleClick }
        handleClickIsClicked={ handleClickIsClicked }
      />
      <div className="container-md">
        {first12Meals.map((meal, index) => (
          <CardTelaPrincipal
            key={ meal.idMeal }
            index={ index }
            thumb={ meal.strMealThumb }
            name={ meal.strMeal }
          />
        ))}
      </div>
    </div>
  );
}
