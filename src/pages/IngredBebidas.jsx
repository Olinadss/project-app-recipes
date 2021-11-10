import React, { useState, useEffect } from 'react';
import { Header, Footer, CardIngredientes } from '../components';

export default function IngredBebidas() {
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

  return (
    <div>
      <Header title="Explorar Ingredientes" search={ false } />
      {first12Ingredientes.map((ingrediente, index) => (
        <CardIngredientes
          key={ ingrediente.strIngredient1 }
          index={ index }
          name={ ingrediente.strIngredient1 }
          image={
            `https://www.thecocktaildb.com/images/ingredients/${ingrediente.strIngredient1}-Small.png`
          }
        />
      ))}
      <Footer />
    </div>
  );
}
