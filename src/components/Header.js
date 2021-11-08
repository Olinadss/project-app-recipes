import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="profile-top-btn">btn</h1>
        <h2 data-testid="page-title">titulo</h2>
        <h3 data-testid="search-top-btn">Search top</h3>
      </div>
    );
  }
}

export default Header;
