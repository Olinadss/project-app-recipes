import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function ContainerExplorar({ type }) {
  const history = useHistory();
  const [id, setId] = useState('');

  async function fetchRamdomApi() {
    if (type === 'comidas') {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      const { idMeal } = data.meals[0];
      setId(idMeal);
      return;
    }

    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    const { idDrink } = data.drinks[0];
    setId(idDrink);
  }

  useEffect(() => {
    fetchRamdomApi();
  }, []);

  function handleClick(route) {
    history.push(route);
  }

  return (
    <div>
      <button
        data-testid="explore-by-ingredient"
        type="button"
        onClick={ () => handleClick(`/explorar/${type}/ingredientes`) }
      >
        Por Ingredientes
      </button>
      {type === 'comidas' && (
        <button
          data-testid="explore-by-area"
          type="button"
          onClick={ () => handleClick('/explorar/comidas/area') }
        >
          Por Local de Origem
        </button>
      )}
      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ () => handleClick(`/${type}/${id}`) }
      >
        Me Surpreenda!
      </button>
    </div>
  );
}

ContainerExplorar.propTypes = {
  type: PropTypes.string.isRequired,
};
