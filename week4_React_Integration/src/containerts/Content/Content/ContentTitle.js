import React, { Component } from 'react';
import SearchTitle from '../../Search/Search/SearchTitle';
import MachineList from '../../MachineList/MachineList';

class ContentTitle extends Component {
  render() {
    return (
      <div className="content">
        <div className="title">Machine List</div>
        <SearchTitle />
        <MachineList />
      </div>
    );
  }
}

export default ContentTitle;
