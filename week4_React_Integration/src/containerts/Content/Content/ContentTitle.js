import React, { Component } from 'react';
import SearchTitle from '../../Search/Search/SearchTitle';
import MachineList from '../../MachineList/MachineList';
import FooterPage from '../../Footer/footerPage';

class ContentTitle extends Component {
  render() {
    return (
      <div className="content">
        <div className="title">Machine List</div>
        <SearchTitle />
        <MachineList />
        <FooterPage />
      </div>
    );
  }
}

export default ContentTitle;
