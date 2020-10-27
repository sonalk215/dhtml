import React, { Component } from 'react';
import {BrowserRouter,Route, NavLink, Switch} from 'react-router-dom';
import MainPage from './components/MainPage';
import Content from './components/Content/Content';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className={classes.mainNav}>
            <ul>
              <li><NavLink to="/" exact activeClassName={classes.linkIsActive}>Home</NavLink></li>
              <li><NavLink to="/content" exact activeClassName={classes.linkIsActive}>Calendar</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={MainPage} />
        <Route path="/content" exact component={Content} />
      </div>
    )
  }
}

export default App;