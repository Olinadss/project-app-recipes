import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/comidas" component={Comidas} />
            <Route exact path="/comidas/:idMeal" component={ComidaDetalhe} />
            <Route exact path="/comidas/:idMeal/in-progress" component={ComidaProgess} />
            <Route exact path="/bebidas" component={Bebidas} />
            <Route exact path="/bebidas/:idMeal" component={bebidaDetalhe} />
            <Route exact path="/bebidas/:idMeal/in-progress" component={bebidaProgress} />
            <Route exact path="/explorar" component={Explorar} />
            <Route exact path="/explorar/comidas" component={ExplorarComidas} />
            <Route exact path="/explorar/bebidas" component={ExplorarBebidas} />
            <Route exact path="/explorar/comidas/ingredientes" component={IngredComidas} />
            <Route exact path="/explorar/bebidas/ingredientes" component={IngredBebidas} />
            <Route exact path="/explorar/comidas/area" component={ComidasArea} />
            <Route exact path="/perfil" component={Perfil} />
            <Route exact path="/receitas-feitas" component={ReceitasFeitas} />
            <Route exact path="/receitas-favoritas" component={ReceitasFavoritas} />
            <Route exact path="" component={NotFound} />
        </Switch>
    );
}
export default Routes;
