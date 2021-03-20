import './App.css';
import Sidebar from './Component/Sidebar';
import Main from './Component/Main';
import Searchpage from './Component/Pages/Search';
import Tvpage from './Component/Pages/Tv';
import Moviespage from './Component/Pages/Film';
// Single Pages
import SingleTv from './Component/Pages/SingleTv';
import SingleFilm from './Component/Pages/SingleFilm';
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
      fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB}`)
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
          <Sidebar />
          <Switch>
              <Route exact path="/"> 
                <Main feature={this.state.feature} trending={this.state.trending_all} />
              </Route>
              <Route path="/search" component={Searchpage} /> 
              <Route path="/tv" component={Tvpage} /> 
              <Route path="/movie" component={Moviespage} />
              <Route path="/tv-profile/:id" component={SingleTv} /> 
              <Route path="/movie-profile/:id" component={SingleFilm} /> 
          </Switch>
      </div>  
      </Router>
    );
  }
}

export default App;
