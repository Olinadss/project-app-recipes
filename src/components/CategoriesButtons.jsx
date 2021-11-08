import PropTypes from 'prop-types';
import React from 'react';

export default function CategoriesButtons({ categories, handleClick }) {
  const first5Categories = categories.reduce((acc, comida, index) => {
    const NUMBER = 5;
    if (index < NUMBER) acc = [...acc, comida];
    return acc;
  }, []);

  return (
    <div>
      {first5Categories.map((category) => (
        <button
          data-testid={ `${category}-category-filter` }
          type="button"
          key={ category }
          onClick={ () => handleClick(category) }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

CategoriesButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
