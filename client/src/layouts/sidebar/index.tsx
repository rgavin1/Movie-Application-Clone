import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


import { Route } from '../../utils/types';

import { routes } from '../navigation';
import MenuItem from '../Menu/MenuItem';


const Sidebar: React.FC = () => {
    return <Drawer id="drawer" variant="permanent" sx={{
        width: 88,
        flexShrink: 0,
        '.MuiPaper-root': {
            backgroundColor: "#ffffff26"
        },
        '.MuiListItem-root': {
            margin: '15px 0'
        },
        '.MuiListItemIcon-root': {
            justifyContent: 'center'
        }
    }}>
        <List>{
            routes.map((route: Route) => {
                return <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <NavLink style={{ color: '#ffffff8f' }} to={route.path} ><MenuItem text={route.name} icon={<FontAwesomeIcon icon={route.icon} size="2x" />} /></NavLink>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>
            })
        }</List>
            {/* <Container>
                <Stack>
                    <Link to="/">
                        <MenuItem text="home" icon={<FontAwesomeIcon icon={faHome} />} />
                    </Link>
                </Stack>
                <Stack>
                    <Link to="search">
                        <MenuItem text="search" icon={<FontAwesomeIcon icon={faSearch} />} />
                    </Link>
                </Stack>
                <Stack>
                    <Link to="shows">
                        <MenuItem text="tv" icon={<FontAwesomeIcon icon={faTv} />} />
                    </Link>
                </Stack>
                <Stack>
                    <Link to="movies">
                        <MenuItem text="movie" icon={<FontAwesomeIcon icon={faFilm} />} />
                    </Link>
                </Stack>
            </Container> */}
    </Drawer >
}

export default Sidebar;