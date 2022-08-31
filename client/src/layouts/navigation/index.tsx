import React from 'react';
import MenuItem from './MenuItem';
import { faHome, faSearch, faTv, faFilm, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Container, Drawer } from '@mui/material';

export type Route = {
  path: string;
  icon: IconDefinition
}
const routes: Route[] = [
  {
    path: "/",
    icon: faHome
  },
  {
    path: "search",
    icon: faSearch
  },
  {
    path: "tv",
    icon: faTv
  },
  {
    path: "movie",
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