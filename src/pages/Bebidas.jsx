import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header, RecipeCard, Footer } from '../components';
import CardTelaPrincipal from '../components/CardTelaPrincipal';
import CategoriesButtons from '../components/CategoriesButtons';
import useBebidas from '../hooks/useBebidas';
import { GlobalContext } from '../context/GlobalStorage';

export default function Bebidas() {
  const { bebidas, setUrlBebidas } = useBebidas();
  const [categories, setCategories] = useState([]);
  const [isList, setIsList] = useState(false);
  const [drinksArray, setDrinksArray] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data.drinks.map((category) => category.strCategory));
    }

    setUrlBebidas('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    fetchCategories();
  }, [setUrlBebidas]);

  const GLOBAL = useContext(GlobalContext);

  useEffect(() => {
    if (GLOBAL.responseFetch !== null) {
      const { drinks } = GLOBAL.responseFetch;
      const twelve = 12;
      setDrinksArray(drinks.slice(0, twelve));
      if (drinks.length > 1) {
        setIsList(true);
      }
    }
  }, [GLOBAL]);

  const first12Drinks = bebidas.reduce((acc, comida, index) => {
    const NUMBER = 12;
    if (index < NUMBER) acc = [...acc, comida];
    return acc;
  }, []);

  function handleClick(category) {
    setUrlBebidas(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  }

  function handleClickIsClicked() {
    setUrlBebidas('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  }

  function cardHandleClick(id) {
    setUrlBebidas(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }

  return (
    <div>
      <Header title="Bebidas" />
      <CategoriesButtons
        categories={ categories }
        handleClick={ handleClick }
        handleClickIsClicked={ handleClickIsClicked }
      />
      <div className="container-md">
        {first12Drinks.map((meal, index) => (
          <Link
            key={ meal.idDrink }
            to={ `/bebidas/${meal.idDrink}` }
            onClick={ () => cardHandleClick(meal.idDrink) }
          >
            { isList && <RecipeCard products={ drinksArray } pageName="bebidas" /> }
            <CardTelaPrincipal
              key={ meal.idDrink }
              index={ index }
              thumb={ meal.strDrinkThumb }
              name={ meal.strDrink }
            />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
