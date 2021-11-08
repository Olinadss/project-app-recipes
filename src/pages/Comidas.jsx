import React from 'react';
import { Header } from '../components';
import CardTelaPrincipal from '../components/CardTelaPrincipal';
import useComidas from '../hooks/useComidas';

export default function Recipes() {
  const { comidas } = useComidas();
  const first12Meals = comidas.reduce((acc, comida, index) => {
    const NUMBER = 12;
    if (index < NUMBER) acc = [...acc, comida];
    return acc;
  }, []);

  return (
    <div>
      <Header title="Comidas" />
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
