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
        this.setState({
          feature: items.results[0],
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
              <Route path="/search"> 
                <Searchpage />
              </Route>
              <Route path="/tv"> 
                <Tvpage />
              </Route>
              <Route path="/movie"> 
                <Moviespage />
              </Route>
              <Route path="/tv/:id"> 
                <SingleTv shows={this.state.trending_all} />
              </Route>
              <Route path="/movie/:id"> 
                <SingleFilm films={this.state.trending_all} />
              </Route>
          </Switch>
      </div>  
      </Router>
    );
  }
}

export default App;
