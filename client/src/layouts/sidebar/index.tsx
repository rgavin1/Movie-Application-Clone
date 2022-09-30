import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Route } from "../../utils/types";

import { routes } from "../navigation";
import MenuItem from "../Menu/MenuItem";

const linkStyle = {
  color: "#fff",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  textDecoration: "none",
  width: "100%",
  justifyContent: "space-between",
};

const Sidebar: React.FC = () => {
  return (
    <Drawer
      id="drawer"
      variant="permanent"
      sx={{
        width: 220,
        flexShrink: 0,
        ".MuiPaper-root": {
          backgroundColor: "#ffffff26",
          width: "220px",
          paddingTop: '15px',
          paddingBottom: '15px'
        },
        ".MuiListItem-root": {
          margin: "15px 0",
        },
        ".MuiListItemIcon-root": {
          justifyContent: "center",
        },
        ".MuiListItemIcon-root .active": {
          color: "#9e3fb0 !important", // FIXME: MaterialUI: secondary-color
        },
      }}
    >
      <List>
        {routes.map((route: Route) => {
          return (
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{ width: "100%" }}>
                    <NavLink style={linkStyle} to={route.path}>
                        <MenuItem
                        text={route.name}
                        icon={<FontAwesomeIcon icon={route.icon} size="lg" />}
                      />
                      <div id="route-name-container" style={{ width: "100%" }}>
                        <div id="route-name">{route.name}</div>
                      </div>
                    </NavLink>
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
            </ListItem>
          );
        })}
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
  );
};

export default Sidebar;
