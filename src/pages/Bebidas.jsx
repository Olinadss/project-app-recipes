import React from 'react';
import { Header } from '../components';
import CardTelaPrincipal from '../components/CardTelaPrincipal';
import useBebidas from '../hooks/useBebidas';

export default function Bebidas() {
  const { bebidas } = useBebidas();
  const first12Drinks = bebidas.reduce((acc, comida, index) => {
    const NUMBER = 12;
    if (index < NUMBER) acc = [...acc, comida];
    return acc;
  }, []);

  return (
    <div>
      <Header title="Bebidas" />
      <div className="container-md">
        {first12Drinks.map((meal, index) => (
          <CardTelaPrincipal
            key={ meal.idDrink }
            index={ index }
            thumb={ meal.strDrinkThumb }
            name={ meal.strDrink }
          />
        ))}
      </div>
    </div>
  );
}
