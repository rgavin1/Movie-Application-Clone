import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Main from './pages/home/Container';
import { SideBar } from './layouts';

import './App.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import routes from "./utils/routes";
import feat from "./services/feature";
import { feature } from "./utils/types";

const App: React.FC = () => {
  const [feature, setFeature] = useState<feature | {}>({});
  const [trending, setTrending] = useState<feature[] | []>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      setIsSearching(false);

      try {
        const trend = await feat.getTrending();
        const ft = await feat.getFeature();

        setFeature(ft);
        setTrending(trend);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsSearching(true)
      }
    })()

  }, []);

  return (
    <Router>
      <div className="app">
        <SideBar />
        <Routes>
          {/* FIXME: Add with the rest of routes */}
          <Route path="/app">
            {/* <Main feature={feature} trending={trending} /> */}
          </Route>
          {
            routes.map((route: any, index) => {
              return <Route key={index} path={route.pathname} element={route.component} />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;