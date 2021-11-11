import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, CardTelaPrincipal } from '../components';
import useComidas from '../hooks/useComidas';

export default function ComidasArea() {
  const { comidas, setUrlComidas } = useComidas();
  const [areas, setAreas] = useState([]);
  const [chosenArea, setChosenArea] = useState('All');

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const data = await response.json();
      setAreas(data.meals.map((meal) => meal.strArea));
    };

    fetchAPI();
  }, []);

  function handleChange(value) {
    setChosenArea(value);
    if (value === 'All') return setUrlComidas('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    setUrlComidas(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`);
  }

  function cardHandleClick(id) {
    setUrlComidas(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }

  const first12Meals = comidas.reduce((acc, comida, index) => {
    const NUMBER = 12;
    if (index < NUMBER) acc = [...acc, comida];
    return acc;
  }, []);

  return (
    <div>
      <Header title="Explorar Origem" />
      <select
        data-testid="explore-by-area-dropdown"
        value={ chosenArea }
        onChange={ ({ target: { value } }) => handleChange(value) }
      >
        <option data-testid="All-option" value="All">All</option>
        {areas.map((area) => (
          <option
            data-testid={ `${area}-option` }
            key="area"
            value={ area }
          >
            {area}
          </option>
        ))}
      </select>
      <div className="container-md">
        {first12Meals.map((meal, index) => (
          <Link
            key={ meal.idMeal }
            to={ `/comidas/${meal.idMeal}` }
            onClick={ () => cardHandleClick(meal.idMeal) }
          >
            <CardTelaPrincipal
              key={ meal.idMeal }
              index={ index }
              thumb={ meal.strMealThumb }
              name={ meal.strMeal }
            />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
