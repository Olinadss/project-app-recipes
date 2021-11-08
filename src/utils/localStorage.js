function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) return value;

  return JSON.parse(value);
}

export { setLocalStorage, getLocalStorage };
