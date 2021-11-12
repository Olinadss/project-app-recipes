import { useState } from 'react';
import copy from 'clipboard-copy';

export default function useCopyRecipeLinkToClipboard(parentPath, recipeID) {
  const [shouldShowCopiedMessage, setShouldShowCopiedMessage] = useState(false);
  const textToCopy = `http://localhost:3000/${parentPath}/${recipeID}`;

  const copyRecipeLinkToClipboard = async () => {
    try {
      await copy(textToCopy);
      setShouldShowCopiedMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return { shouldShowCopiedMessage, copyRecipeLinkToClipboard };
}
