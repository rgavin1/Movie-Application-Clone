import React from 'react';
// import '../../assets/styles/Sidebar.css';
import Menu from "../navigation";
// import Profile from '../../pages/profile/Container';
import { motion } from 'framer-motion';
import { Container, Drawer, Stack, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuItem from '../Menu/MenuItem';
import { faHome, faSearch, faTv, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    const drawerWidth = 50;

    return  <motion.div initial={{ x: '-100%', opacity: 0 }} transition={{ duration: 2.5 }} animate={{ x: '0%', opacity: 1 }} className="sidebar">
        <Drawer id="drawer" variant="permanent" sx={{
            width: drawerWidth,
            backgroundColor: "#000",
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Typography variant="h6" component="div">R</Typography>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MenuItem text="home" icon={<FontAwesomeIcon icon={faHome} />} />
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="search">
                                <MenuItem text="search" icon={<FontAwesomeIcon icon={faSearch} />} />
                            </Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="shows">
                                <MenuItem text="shows" icon={<FontAwesomeIcon icon={faTv} />} />
                            </Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Link to="movies">
                                <MenuItem text="movie" icon={<FontAwesomeIcon icon={faFilm} />} />
                            </Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItemButton>
                </ListItem>
            </List>
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
        </Drawer>
                {/* <Profile /> */}
            </motion.div>;
}

export default Sidebar;