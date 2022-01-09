import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SideBar } from './layouts';
import Main from './pages/home/Container';

import routes from "./utils/routes";

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
              <Route exact path="/"> 
                <Main feature={this.state.feature} trending={this.state.trending_all} />
            </Route>
            {
              routes.map((route, index) => <Route key={index} path={route.pathname} component={route.component} exact={route.exact} />)
            }
          </Switch>
      </div>  
      </Router>
    );
  }
}

export default App;
