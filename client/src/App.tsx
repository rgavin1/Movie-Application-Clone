import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './assets/styles/app.css'
import { SideBar } from './layouts';

import routes from "./utils/routes";

import HomePage from './pages/home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* <SideBar />
        <Routes>
          {/* FIXME: Add with the rest of routes *
          <Route path="/app" element={<Main feature={feature} trending={trending} />} />
          {
            routes.map((route: any, index) => {
              return <Route key={index} path={route.pathname} element={route.component} />
            })
          }
        </Routes> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;