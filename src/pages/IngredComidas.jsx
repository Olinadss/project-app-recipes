import React, { useState, useEffect } from 'react';
import { Header, Footer, CardIngredientes } from '../components';

export default function IngredComidas() {
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

  return (
    <div>
      <Header title="Explorar Ingredientes" search={ false } />
      {first12Ingredientes.map((ingrediente, index) => (
        <CardIngredientes
          key={ ingrediente.strIngredient }
          index={ index }
          name={ ingrediente.strIngredient }
          image={
            `https://www.themealdb.com/images/ingredients/${ingrediente.strIngredient}-Small.png`
          }
        />
      ))}
      <Footer />
    </div>
  );
}
