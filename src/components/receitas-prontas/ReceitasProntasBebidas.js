import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copy from 'clipboard-copy';
import shareIcon from '../../images/shareIcon.svg';

export default function ReceitasProntasBebidas({ receitasProntas, index }) {
  const [isMensage, setIsMensage] = useState(false);
  async function captureID({ target }) {
    console.log(`beidas/${target.id}`);
    await copy(`http://localhost:3000/bebidas/${target.id}`);
    setIsMensage(true);
  }

  return (
    <div>
      { receitasProntas.map((item) => (
        <>
          <img
            src={ item.image }
            alt={ item.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <h2 data-testid={ `${index}-horizontal-name` }>{item.name}</h2>
          <h2
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${item.category}`}
          </h2>
          <h2
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${item.alcoholicOrNot}`}
          </h2>
          <h2 data-testid={ `${index}-horizontal-done-date` }>{item.doneDate}</h2>
          <button type="button" onClick={ captureID }>
            <img
              id={ item.id }
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="compartilhar"
            />
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
      {isMensage && <p>Link copiado!</p>}
    </div>
  );
}

ReceitasProntasBebidas.propTypes = {
  array: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;
