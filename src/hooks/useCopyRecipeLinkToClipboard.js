import { useState } from 'react';

export default function useCopyRecipeLinkToClipboard(parentPath, recipeID) {
  const [shouldShowCopiedMessage, setShouldShowCopiedMessage] = useState(false);
  const textToCopy = `http://localhost:3000/${parentPath}/${recipeID}`;

  const copyRecipeLinkToClipboard = async () => {
    try {
      await window.navigator.clipboard.writeText(textToCopy);
      setShouldShowCopiedMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return { shouldShowCopiedMessage, copyRecipeLinkToClipboard };
}
