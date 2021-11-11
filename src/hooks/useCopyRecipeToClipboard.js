import { useState, useEffect } from 'react';
import copy from 'clipboard-copy';

export default function useCopyRecipeToClipboard(parentPath, recipeID) {
  const [shouldShowCopiedMessage, setShouldShowCopiedMessage] = useState(false);
  const textToCopy = `http://localhost:3000/${parentPath}/${recipeID}`;

  const copyToClipboard = async () => {
    await copy(textToCopy);
    setShouldShowCopiedMessage(true);
  };

  useEffect(() => {
    let timeoutID = null;
    const copiedMessageDuration = 3000;

    if (shouldShowCopiedMessage) {
      timeoutID = setTimeout(
        () => setShouldShowCopiedMessage(false), copiedMessageDuration,
      );
    }

    return () => clearTimeout(timeoutID);
  }, [shouldShowCopiedMessage]);

  return { shouldShowCopiedMessage, copyToClipboard };
}
