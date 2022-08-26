import React from 'react';
import MenuItem from './MenuItem';
import { faHome, faSearch, faTv, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="sidebar__menu">
      <Link to="/">
        <MenuItem text="home" icon={<FontAwesomeIcon icon={faHome} />} />
      </Link>
      <Link to="/search">
        <MenuItem text="search" icon={<FontAwesomeIcon icon={faSearch} />} />
      </Link>
      <Link to="/tv">
        <MenuItem text="tv" icon={<FontAwesomeIcon icon={faTv} />} />
      </Link>
      <Link to="movies">
        <MenuItem text="movie" icon={<FontAwesomeIcon icon={faFilm} />} />
      </Link>
    </div>
  );
}

export default Menu;