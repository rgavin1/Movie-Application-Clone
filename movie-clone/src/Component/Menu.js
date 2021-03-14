import React from 'react';
import MenuItem from './MenuItem';
import { faHome, faSearch, faTv, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
    return  <div className="sidebar__menu">
                <MenuItem text="home" icon={<FontAwesomeIcon icon={faHome} />} />  
                <MenuItem text="search" icon={<FontAwesomeIcon icon={faSearch} />} />  
                <MenuItem text="tv" icon={<FontAwesomeIcon icon={faTv} />} />  
                <MenuItem text="movie" icon={<FontAwesomeIcon icon={faFilm} />} />  
            </div>
}

export default Menu;