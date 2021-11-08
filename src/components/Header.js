import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = (props) => {
  const { title, search } = props;
  const [searchBar, setSearchBar] = useState(false);
  return (

    <header className="header">
      <Link
        to="/perfil"
      >
        <img src={ profileIcon } data-testid="profile-top-btn" alt="" />
      </Link>
      <h1 data-testid="page-title">{ title }</h1>
      {search
        && (
          <button
            onClick={ () => setSearchBar(!searchBar) }
            type="button"
          >
            <img src={ searchIcon } data-testid="search-top-btn" alt="" />
          </button>)}
      { searchBar && <input type="text" data-testid="search-input" /> }

    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool,
};

Header.defaultProps = {
  search: true,
};

export default Header;
