import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function CategoriesButtons({
  categories, handleClick, handleClickIsClicked,
}) {
  const [isClicked, setIsClicked] = useState([false, false, false, false, false]);

  const first5Categories = categories.reduce((acc, category, index) => {
    const NUMBER = 5;
    if (index < NUMBER) acc = [...acc, category];
    return acc;
  }, []);

  async function toogleClicked(category, index) {
    if (isClicked[index]) {
      handleClickIsClicked();
    } else {
      handleClick(category);
    }

    setIsClicked((prevState) => prevState.reduce((accumulator, state, stateIndex) => {
      if (stateIndex === index) {
        accumulator = [...accumulator, !state];
        return accumulator;
      }
      accumulator = [...accumulator, state];
      return accumulator;
    }, []));
  }

  return (
    <div>
      <button
        data-testid="All-category-filter"
        type="button"
        key="All"
        onClick={ () => handleClickIsClicked() }
      >
        All
      </button>
      {first5Categories.map((category, index) => (
        <button
          data-testid={ `${category}-category-filter` }
          type="button"
          key={ category }
          onClick={ () => toogleClicked(category, index) }
          value={ isClicked[index] }
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
  handleClickIsClicked: PropTypes.func.isRequired,
};
