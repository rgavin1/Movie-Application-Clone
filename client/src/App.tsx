import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Box } from '@mui/material';
import './assets/styles/app.css'
import { Footer, SideBar } from './layouts';

import routes from "./utils/routes";

import { HomePage, MoviesPage, TelevisionShowsPage } from './pages';

const App: React.FC = () => {
  return (
    <div className="app">
      <Box sx={{ display: 'flex' }}>
      <SideBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
            <Route path="shows" element={<TelevisionShowsPage />} />
        <Route path="movies" element={<MoviesPage />} />
          </Routes>
          <Footer />
        </Box>
      </Box>
    </div>
  );
}

export default App;