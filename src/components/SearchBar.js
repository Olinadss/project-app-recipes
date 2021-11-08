import React, { useState } from 'react';

const SearchBar = () => {
  console.log(React);
  const [setSearchInput] = useState('');
  const [setOption] = useState('name');

  const handleSubmit = () => {

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
          onChange={ setSearchInput }
        />
        <label className="btn btn-secondary" htmlFor="Ingredientes">
          Ingredientes
          <input
            type="radio"
            style={ { width: '70px' } }
            className="btn-check"
            id="Ingredientes"
            value="ingredients"
            data-testid="ingredient-search-radio"
            name="option"
            onChange={ ({ target: { e } }) => setOption(e.value) }
          />
        </label>
        <label className="btn btn-secondary" htmlFor="name">
          Nome
          <input
            className="btn-check"
            style={ { width: '70px' } }
            type="radio"
            id="name"
            checked="true"
            value="name"
            data-testid="name-search-radio"
            name="option"
            onChange={ ({ target: { e } }) => setOption(e.value) }
          />
        </label>
        <label className="btn btn-secondary" htmlFor="first-letter">
          Primeira Letra
          <input
            style={ { width: '70px' } }
            type="radio"
            className="btn-check"
            id="first-letter"
            value="first-letter"
            data-testid="first-letter-search-radio"
            name="option"
            onChange={ ({ target: { e } }) => setOption(e.value) }
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
