import React from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import "./assets/styles/app.css";
import { Footer, SideBar } from "./layouts";

import { HomePage, MoviesPage, TvShowsPage, SearchPage, TvShowDetailsPage, MovieDetailsPage } from "./pages";

export type Page = {
  path: string;
  component: JSX.Element
}

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
    path: "tv",
    component: <TvShowsPage />,
  },
  {
    path: "tv/:id",
    component: <TvShowDetailsPage />,
  },
  {
    path: "movie",
    component: <MoviesPage />,
  },
  {
    path: "movie/:id",
    component: <MovieDetailsPage />,
  }
]

const App: React.FC = () => {
  return (
    <div className="app">
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            {
              pages.map((page, id) => <Route key={id} path={page.path} element={page.component} />)
            }
          </Routes>
          <Footer />
        </Box>
      </Box>
    </div>
  );
};

export default App;
