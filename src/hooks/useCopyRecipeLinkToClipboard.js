import { useState, useEffect } from 'react';
import copy from 'clipboard-copy';

export default function useCopyRecipeLinkToClipboard(parentPath, recipeID) {
  const [shouldShowCopiedMessage, setShouldShowCopiedMessage] = useState(false);
  const textToCopy = `http://localhost:3000/${parentPath}/${recipeID}`;

  const copyRecipeLinkToClipboard = async () => {
    try {
      await copy(textToCopy);
      setShouldShowCopiedMessage(true);
    } catch (error) {
      throw new Error(error);
    }
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

  return { shouldShowCopiedMessage, copyRecipeLinkToClipboard };
}
