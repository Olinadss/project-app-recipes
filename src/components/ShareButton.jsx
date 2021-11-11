import React from 'react';
import PropTypes from 'prop-types';
import useCopyRecipeToClipboard from '../hooks/useCopyRecipeToClipboard';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton({ parentPath, recipeID, dataTestID }) {
  const {
    shouldShowCopiedMessage, copyToClipboard,
  } = useCopyRecipeToClipboard(parentPath, recipeID);
  console.log(shouldShowCopiedMessage);

  const copiedMessage = 'Link copiado!';

  return (
    <div>
      <button
        type="button"
        onClick={ copyToClipboard }
        data-testid={ dataTestID }
      >
        <img
          id={ recipeID }
          src={ shareIcon }
          alt="Compartilhar receita"
        />
      </button>
      { shouldShowCopiedMessage && <span>{ copiedMessage }</span> }
    </div>
  );
}

ShareButton.propTypes = {
  dataTestID: PropTypes.string.isRequired,
  parentPath: PropTypes.string.isRequired,
  recipeID: PropTypes.string.isRequired,
};
