import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  browserHistory,
} from 'react-router-dom';

import Menu from './Menu/Menu';
import Header from './Header/header/headerTitle';
import MenuList from './MenuList/MenuList';
import Content from './Content/Content/ContentTitle';
import { MachineData } from '../data/index';

export default class App extends Component {
  render() {
    window.localStorage.clear();
    window.localStorage.setItem('currentPage', 1);
    window.localStorage.setItem('machineData', JSON.stringify(MachineData));
    return (
      <Router histroy={browserHistory}>
        <div id="container">
          <Menu />
          <div id="main">
            <Header />
            <Route path="/" exact component={Content} />
            <Route path="/MenuList/:id" component={MenuList} />
          </div>
          {/* <div id="content"> */}
          {/* <Header /> */}
          {/* <Route path="/" exact component={MachinList} />
          {/* </div> */}
        </div>
      </Router>
    );
  }
}
