import PropTypes from 'prop-types';
import React from 'react';

export default function ReceitasProntas({ receitasProntas }) {
  return (
    <div>
      { receitasProntas.map((item, index) => (
        <>
          <img
            src={ item.image }
            alt={ item.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <h2 data-testid={ `${index}-horizontal-top-text` }>{item.category}</h2>
          <h2 data-testid={ `${index}-horizontal-name` }>{item.name}</h2>
          <h2 data-testid={ `${index}-horizontal-done-date` }>{item.doneDate}</h2>
          <button
            data-testid={ `${index}-horizontal-share-btn` }
            type="button"
          >
            Compartilhar
          </button>
          {item.tags.map((tagsName, indexTag) => (
            <p
              data-testid={ `${index}-${item.tags[indexTag]}-horizontal-tag` }
              key={ tagsName }
            >
              {tagsName}
            </p>
          ))}
        </>
      ))}
    </div>
  );
}

ReceitasProntas.propTypes = {
  array: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;
