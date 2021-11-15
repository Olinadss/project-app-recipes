function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) return value;

  return JSON.parse(value);
}

export default function setupLocalStorage() {
  const initialLocalStorage = [
    {
      key: 'inProgressRecipes',
      value: {
        meals: {},
        cocktails: {},
      },
    },
    {
      key: 'doneRecipes',
      value: [],
    },
  ];

  initialLocalStorage.forEach(({ key, value }) => {
    if (!getLocalStorage(key)) setLocalStorage(key, value);
  });
}

export { setLocalStorage, getLocalStorage };
