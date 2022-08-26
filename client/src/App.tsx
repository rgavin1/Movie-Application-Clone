import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './assets/styles/app.css'
import { Footer, SideBar } from './layouts';

import routes from "./utils/routes";

import { HomePage, MoviesPage } from './pages';

const App: React.FC = () => {
  return (
    <div className="app">
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;