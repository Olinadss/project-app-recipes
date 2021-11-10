import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Footer, CardIngredientes } from '../components';
import useComidas from '../hooks/useComidas';

export default function IngredComidas() {
  const history = useHistory();
  const { setUrlComidas } = useComidas();
  const [ingredientes, setIngredientes] = useState([]);

  async function fetchIngredientes() {
    const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(URL);
    const data = await response.json();
    setIngredientes(data.meals);
  }

  useEffect(() => {
    fetchIngredientes();
  }, []);

  const first12Ingredientes = ingredientes.reduce((acc, comida, index) => {
    const NUMBER = 12;
    if (index < NUMBER) acc = [...acc, comida];
    return acc;
  }, []);

  function handleClickIngredient(ingrediente) {
    setUrlComidas(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
    history.push('/comidas');
  }

  return (
    <div>
      <Header title="Explorar Ingredientes" search={ false } />
      {first12Ingredientes.map((ingrediente, index) => (
        <button
          type="button"
          key={ ingrediente.strIngredient }
          onClick={ () => handleClickIngredient(ingrediente.strIngredient) }
        >
          <CardIngredientes
            index={ index }
            name={ ingrediente.strIngredient }
            image={
              `https://www.themealdb.com/images/ingredients/${ingrediente.strIngredient}-Small.png`
            }
          />
        </button>
      ))}
      <Footer />
    </div>
  );
}
