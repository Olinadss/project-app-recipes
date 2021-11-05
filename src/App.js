import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" />
        <Route path="/bebidas" />
        <Route path={ `/comidas/${id - da - receita}` } />
        <Route path={ `/bebidas/${id - da - receita}` } />
        <Route path={ `/comidas/${id - da - receita}/in-progress` } />
        <Route path={ `/bebidas/${id - da - receita}/in-progress` } />
        <Route path="/explorar" />
        <Route path="/explorar/comidas" />
        <Route path="/explorar/bebidas" />
        <Route path="/explorar/comidas/ingredientes" />
        <Route path="/explorar/bebidas/ingredientes" />
        <Route path="/explorar/comidas/area" />
        <Route path="/perfil" />
        <Route path="/receitas-feitas" />
        <Route path="/receitas-favoritas" />
      </Switch>
    </div>
  );
}

export default App;
