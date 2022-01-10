import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/home/Container';
import { SideBar } from './layouts';

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import routes from "./utils/routes";
import { feature as feat } from "./services";

require('dotenv').config();

const App: React.FC = () => {
  const [feature, setFeature] = useState({});
  const [trending, setTrending] = useState([]);
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
        <Switch>
          {/* FIXME: Add with the rest of routes */}
          <Route exact path="/app">
            <Main feature={feature} trending={trending} />
          </Route>
          {
            routes.map((route, index) => {
              return <Route key={index} path={route.pathname} component={route.component} />
            })
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;