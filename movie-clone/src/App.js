import './App.css';

import { SideBar } from './layouts';

import routes from "./utils/routes";

import Main from './pages/home/Container';
// import Searchpage from './pages/search/Container';
// import Tvpage from './pages/shows/Container';
// import Moviespage from './pages/movies/Container';
// Single Pages
// import SingleTv from './pages/shows/program/Container';
// import SingleFilm from './pages/movies/film/Container';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';

require('dotenv').config();


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      feature: {},
      trending_all: [],
      searching: false
    }
  }

  componentDidMount() {
      fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
      .then(res => res.json())
      .then((items) => {
        const random_num = Math.floor(Math.random() * 19);
        this.setState({
          feature: items.results[random_num],
          trending_all: items.results,
          searching: false
        },
        (error) => {
          this.setState({
            searching: true,
            error
          });
        } 
        )
      });
  }
  render(){
    
    return (
      <Router>
      <div className="app">
          <SideBar />
          <Switch>
            {/* FIXME: Add with the rest of routes */}
              <Route exact path="/app"> 
                <Main feature={this.state.feature} trending={this.state.trending_all} />
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
}

export default App;
