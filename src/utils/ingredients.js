export default function getIngredientsWithMeasures(recipe) {
  const ingredientsInfo = Object.entries(recipe);

  return ingredientsInfo.reduce((acc, [key, value]) => {
    if (key.includes('strIngredient') && (value)) {
      const measureIndex = key.replace('strIngredient', '');
      const measureKey = `strMeasure${measureIndex}`;

      return { ...acc, [value]: recipe[measureKey] };
    }
    return acc;
  }, {});
}
