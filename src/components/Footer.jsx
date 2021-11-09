import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div data-testid="footer" className="footer">
      <Link to="/bebidas">
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="drink" />
      </Link>
      <Link to="/explorar">
        <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="explorar" />
      </Link>
      <Link to="/comidas">
        <img data-testid="food-bottom-btn" src={ mealIcon } alt="comidas" />
      </Link>
    </div>
  );
}

export default Footer;
