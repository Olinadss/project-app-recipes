import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import ComidaDetalhe from './pages/ComidaDetalhe';
import ComidaProgress from './pages/ComidaProgress';
import Bebidas from './pages/Bebidas';
import BebidaDetalhe from './pages/BebidaDetalhe';
import BebidaProgress from './pages/BebidaProgress';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import IngredComidas from './pages/IngredComidas';
import IngredBebidas from './pages/IngredBebidas';
import ComidasArea from './pages/ComidasArea';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/comidas/:idMeal" component={ ComidaDetalhe } />
      <Route exact path="/comidas/:idMeal/in-progress" component={ ComidaProgress } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route exact path="/bebidas/:idCocktails" component={ BebidaDetalhe } />
      <Route
        exact
        path="/bebidas/:idCocktails/in-progress"
        component={ BebidaProgress }
      />
      <Route exact path="/explorar" component={ Explorar } />
      <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
      <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route exact path="/explorar/comidas/ingredientes" component={ IngredComidas } />
      <Route exact path="/explorar/bebidas/ingredientes" component={ IngredBebidas } />
      <Route exact path="/explorar/comidas/area" component={ ComidasArea } />
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
      <Route exact path="" component={ NotFound } />
    </Switch>
  );
}
export default Routes;
