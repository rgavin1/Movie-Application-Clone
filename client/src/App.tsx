import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/app.css";

import { Footer, SideBar } from "./layouts";
import {
  HomePage,
  MoviesPage,
  TvShowsPage,
  SearchPage,
  TvShowDetailsPage,
  MovieDetailsPage,
  LoginPage
} from "./pages";

export type Page = {
  path: string;
  component: JSX.Element;
};

const pages: Page[] = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "search",
    component: <SearchPage />,
  },
  {
    path: "shows",
    component: <TvShowsPage />,
  },
  {
    path: "shows/:id/details",
    component: <TvShowDetailsPage />,
  },
  {
    path: "search/shows/:id/details", // :shhh: This is wrong
    component: <TvShowDetailsPage />,
  },
  {
    path: "movies",
    component: <MoviesPage />,
  },
  {
    path: "movies/:id/details",
    component: <MovieDetailsPage />,
  },
  {
    path: "search/movies/:id/details",      // :shhh: This is wrong
    component: <MovieDetailsPage />,
  },
];

const App: React.FC = () => {
  return (
    <>{true ? <LoginPage /> :
    <div className="app">
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            {pages.map((page, id) => (
              <Route key={id} path={page.path} element={page.component} />
            ))}
          </Routes>
          <Footer />
        </Box>
      </Box>
      </div>
    }</>
  );
};

export default App;
