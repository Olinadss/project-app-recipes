import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header, RecipeCard } from '../components';
import CardTelaPrincipal from '../components/CardTelaPrincipal';
import CategoriesButtons from '../components/CategoriesButtons';
import useComidas from '../hooks/useComidas';
import { GlobalContext } from '../context/GlobalStorage';

export default function Recipes() {
  const { comidas, setUrlComidas } = useComidas();
  const [categories, setCategories] = useState([]);
  const [isList, setIsList] = useState(false);
  const [foods, setFoods] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data.meals.map((category) => category.strCategory));
    }
    setUrlComidas('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    fetchCategories();
  }, [setUrlComidas]);

  const GLOBAL = useContext(GlobalContext);

  useEffect(() => {
    if (GLOBAL.responseFetch !== null) {
      const { meals } = GLOBAL.responseFetch;
      if (meals !== null) {
        const twelve = 12;
        setFoods(meals.slice(0, twelve));
        if (meals.length > 1) {
          setIsList(true);
        }
      }
    }
  }, [GLOBAL]);

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

  function cardHandleClick(id) {
    setUrlComidas(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
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
          <Link
            key={ meal.idMeal }
            to={ `/comidas/${meal.idMeal}` }
            onClick={ () => cardHandleClick(meal.idMeal) }
          >
            { isList && <RecipeCard products={ foods } pageName="comidas" /> }
            <CardTelaPrincipal
              index={ index }
              thumb={ meal.strMealThumb }
              name={ meal.strMeal }
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
