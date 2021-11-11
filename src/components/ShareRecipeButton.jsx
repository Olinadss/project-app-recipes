import React from 'react';
import PropTypes from 'prop-types';
import useCopyRecipeToClipboard from '../hooks/useCopyRecipeToClipboard';
import shareIcon from '../images/shareIcon.svg';

export default function ShareRecipeButton(
  { parentPath, recipeID, dataTestID, getRecipeID },
) {
  const {
    shouldShowCopiedMessage, copyToClipboard,
  } = useCopyRecipeToClipboard(parentPath, recipeID);

  const copiedMessage = 'Link copiado!';

  return (
    <div>
      <button
        type="button"
        onClick={ copyToClipboard }
        data-testid={ dataTestID }
      >
        <img
          id={ recipeID || getRecipeID() }
          src={ shareIcon }
          alt="Compartilhar receita"
        />
      </button>
      { shouldShowCopiedMessage && <span>{ copiedMessage }</span> }
    </div>
  );
}

ShareRecipeButton.propTypes = {
  dataTestID: PropTypes.string.isRequired,
  parentPath: PropTypes.string.isRequired,
  recipeID: PropTypes.string.isRequired,
  getRecipeID: PropTypes.func,
};

ShareRecipeButton.defaultProps = {
  getRecipeID: null,
};
