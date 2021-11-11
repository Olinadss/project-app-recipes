import React from 'react';
import PropTypes from 'prop-types';
import useCopyRecipeToClipboard from '../hooks/useCopyRecipeToClipboard';
import shareIcon from '../images/shareIcon.svg';

export default function ShareRecipeButton(
  { parentPath, recipeID, dataTestID },
) {
  const {
    shouldShowCopiedMessage, copyToClipboard,
  } = useCopyRecipeToClipboard(parentPath, recipeID);

  const copiedMessage = 'Link copiado!';

  return (
    <div>
      <input
        type="image"
        src={ shareIcon }
        alt="Compartilhar receita"
        onClick={ copyToClipboard }
        data-testid={ dataTestID }
      />
      { shouldShowCopiedMessage && <span>{ copiedMessage }</span> }
    </div>
  );
}

ShareRecipeButton.propTypes = {
  dataTestID: PropTypes.string.isRequired,
  parentPath: PropTypes.string.isRequired,
  recipeID: PropTypes.string.isRequired,
};
