import React from 'react';

function Footer() {
  return (
    <div data-testid="footer">
      <button
        data-testid="drinks-bottom-btn"
        type="button"
      >
        Bebidas
      </button>
      <button
        data-testid="explore-bottom-btn"
        type="button"
      >
        Explorar
      </button>
      <button
        data-testid="food-bottom-btn"
        type="button"
      >
        Comidas
      </button>
    </div>
  );
}

export default Footer;
