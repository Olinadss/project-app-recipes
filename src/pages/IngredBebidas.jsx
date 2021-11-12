import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Footer, CardIngredientes } from '../components';
import useBebidas from '../hooks/useBebidas';

export default function IngredBebidas() {
  const history = useHistory();
  const { setUrlBebidas } = useBebidas();
  const [ingredientes, setIngredientes] = useState([]);

  async function fetchIngredientes() {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(URL);
    const data = await response.json();
    setIngredientes(data.drinks);
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
    setUrlBebidas(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
    history.push('/bebidas');
  }

  return (
    <div>
      <Header title="Explorar Ingredientes" search={ false } />
      {first12Ingredientes.map((ingrediente, index) => (
        <button
          type="button"
          key={ ingrediente.strIngredient1 }
          onClick={ () => handleClickIngredient(ingrediente.strIngredient1) }
        >
          <CardIngredientes
            index={ index }
            name={ ingrediente.strIngredient1 }
            image={
              `https://www.thecocktaildb.com/images/ingredients/${ingrediente.strIngredient1}-Small.png`
            }
          />
        </button>
      ))}
      <Footer />
    </div>
  );
}
