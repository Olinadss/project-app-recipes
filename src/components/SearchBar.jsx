import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { GlobalContext } from '../context/GlobalStorage';

const SearchBar = () => {
  console.log(React);
  const [searchInput, setSearchInput] = useState('');
  const [option, setOption] = useState('name');
  const { request } = useFetch();
  const FIRST_LETTER = 'first-letter';
  const INGREDIENTS = 'ingredients';
  const NAME = 'name';
  const GLOBAL = useContext(GlobalContext);
  const history = useHistory();
  const pageName = window.location.pathname;

  useEffect(() => {
    if (GLOBAL.responseFetch !== null && pageName === '/comidas') {
      console.log(GLOBAL.responseFetch);
      if (GLOBAL.responseFetch.meals === null) {
        global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        GLOBAL.setResponseFetch(null);
      } else if (GLOBAL.responseFetch.meals.length === 1) {
        const { idMeal } = GLOBAL.responseFetch.meals[0];
        history.push(`/comidas/${idMeal}`);
      } else {
        console.log('amigo estou aqui');
      }
    } else if (GLOBAL.responseFetch !== null && pageName === '/bebidas') {
      if (GLOBAL.responseFetch.drinks === null) {
        GLOBAL.setResponseFetch(null);
        global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      } else if (GLOBAL.responseFetch.drinks.length === 1) {
        const { idDrink } = GLOBAL.responseFetch.drinks[0];
        history.push(`/bebidas/${idDrink}`);
      } else {
        console.log('amigo estou aqui');
      }
    }
  }, [GLOBAL, history, pageName]);

  const ifHandle = async (op, method) => {
    if (pageName === '/comidas') {
      await request(`https://www.themealdb.com/api/json/v1/1/${method}.php?${op}=${searchInput}`);
    } else if (pageName === '/bebidas') {
      await request(`https://www.thecocktaildb.com/api/json/v1/1/${method}.php?${op}=${searchInput}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchInput.length > 1 && option === FIRST_LETTER) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      switch (option) {
      case INGREDIENTS:
        ifHandle('i', 'filter');
        break;
      case NAME:
        await ifHandle('s', 'search');
        break;
      case FIRST_LETTER:
        ifHandle('f', 'search');
        break;
      default:
        return null;
      }
    }
  };

  return (
    <div className="search-div">
      <form onSubmit={ (e) => handleSubmit(e) } className="search-form">
        <input
          type="text"
          className="form-control"
          style={ { width: '150%', borderRadius: '5px', border: '1px solid #ccc' } }
          data-testid="search-input"
          placeholder="Buscar Receita"
          onChange={ (e) => setSearchInput(e.target.value) }
        />
        <label className="btn btn-secondary" htmlFor="Ingredientes">
          Ingredientes
          <input
            type="radio"
            style={ { width: '70px' } }
            className="btn-check"
            id="Ingredientes"
            value={ INGREDIENTS }
            data-testid="ingredient-search-radio"
            name="option"
            onClick={ () => setOption(INGREDIENTS) }
          />
        </label>
        <label className="btn btn-secondary" htmlFor="name">
          Nome
          <input
            className="btn-check"
            style={ { width: '70px' } }
            type="radio"
            id="name"
            value={ NAME }
            data-testid="name-search-radio"
            name="option"
            onClick={ () => setOption(NAME) }
            defaultChecked
          />
        </label>
        <label className="btn btn-secondary" htmlFor="first-letter">
          Primeira Letra
          <input
            style={ { width: '70px' } }
            type="radio"
            className="btn-check"
            id="first-letter"
            value={ FIRST_LETTER }
            data-testid="first-letter-search-radio"
            name="option"
            onClick={ () => setOption(FIRST_LETTER) }
          />
        </label>
        <button
          style={ { width: '150%' } }
          className="btn btn-secondary"
          type="submit"
          data-testid="exec-search-btn"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
