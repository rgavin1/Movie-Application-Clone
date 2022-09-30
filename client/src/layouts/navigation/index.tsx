import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Drawer } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faTv, faFilm } from '@fortawesome/free-solid-svg-icons'

import MenuItem from './MenuItem';
import { Route } from '../../utils/types';

export const routes: Route[] = [
  {
    name: "home",
    path: "/",
    icon: faHome
  },
  {
    name: "search",
    path: "search",
    icon: faSearch
  },
  {
    name: "television shows",
    path: "shows",
    icon: faTv
  },
  {
    name: "movies",
    path: "movies",
    icon: faFilm
  }
]

const Menu: React.FC = () => {
  return (
    <Drawer variant="permanent">
      <Container>
        {routes.map((route: Route, index: number) =>
          <Link key={index} to={route.path}>
            <MenuItem text={route.path} icon={<FontAwesomeIcon icon={route.icon} />} />
          </Link>
        )}
      </Container>
    </Drawer>
  );
}

export default Menu;