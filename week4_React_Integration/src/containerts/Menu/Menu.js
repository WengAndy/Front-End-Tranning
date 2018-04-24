import React, { Component } from 'react';
import MenuTitle from './components/menuTitle';

export default class Menu extends Component {
  render() {
    return (
      <nav id="menu">
        <h1 className="logo"><a href="/">SVM LOGO</a></h1>
        {<MenuTitle />}
      </nav>
    );
  }
}
