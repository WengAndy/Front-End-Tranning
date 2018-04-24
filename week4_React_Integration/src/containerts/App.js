import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom';

import Menu from './Menu/Menu';
// import Header from './App/Header/Header';
// import MachinList from './MachinList/MachinList';
import MenuList from './MenuList/MenuList';

export default class App extends Component {
  render() {
    return (
      <Router histroy={browserHistory}>
        <div id="container">
          <Menu />
          <Route path="/MenuList/:id" component={MenuList} />
          {/* <div id="content"> */}
          {/* <Header /> */}
          {/* <Route path="/" exact component={MachinList} />
          {/* </div> */}
        </div>
      </Router>
    );
  }
}
