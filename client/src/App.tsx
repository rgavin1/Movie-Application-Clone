import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { SideBar } from './layouts';

import routes from "./utils/routes";
import feat from "./services/feature";
import { Payload } from "./utils/types";
import HomePage from './pages/home';

const App: React.FC = () => {
  const [feature, setFeature] = useState<Payload | {}>({});
  const [trending, setTrending] = useState<Payload[] | []>([]);
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
          <Route path="/" element={<HomePage feature={feature} trending={trending} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;