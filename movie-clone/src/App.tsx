import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './pages/home/Container';
import { SideBar } from './layouts';

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import routes from "./utils/routes";

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
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const items = await response.json();

        const random_num = Math.floor(Math.random() * 19);
        setFeature(items.results[random_num]);
        setTrending(items.results);
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
