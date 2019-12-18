import React, {Component} from 'react';

// Import Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Category from './pages/Category/Category';
import Article from './pages/Article/Article';
import Bookmark from './pages/Bookmark/Bookmark';
import Comment from './pages/Comment/Comment';
import Storyadd from './pages/Storyadd/Storyadd';
import Story from './pages/Story/Story';
import Stats from './pages/Stats/Stats';
import Profiles from './pages/Profiles/Profiles';

// Routing

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render(){
    return(
      <div>
      <Router>
          <Switch>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
          <Route path="/comment">
            <Comment />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/storyadd">
            <Storyadd />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/profile">
            <Profiles />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route> 
          
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
