import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Recipes from './pages/Recipes';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Recipes } />
        {/*
        <Route path="/bebidas" />
        <Route path="/comidas/:recipeId" />
        <Route path="/bebidas/:recipeId" />
        <Route path="/comidas/:recipeId/in-progress" />
        <Route path="/bebidas/:recipeId/in-progress" />
        <Route path="/explorar" />
        <Route path="/explorar/comidas" />
        <Route path="/explorar/bebidas" />
        <Route path="/explorar/comidas/ingredientes" />
        <Route path="/explorar/bebidas/ingredientes" />
        <Route path="/explorar/comidas/area" />
        <Route path="/perfil" />
        <Route path="/receitas-feitas" />
        <Route path="/receitas-favoritas" /> */}
      </Switch>
    </div>
  );
}

export default App;
