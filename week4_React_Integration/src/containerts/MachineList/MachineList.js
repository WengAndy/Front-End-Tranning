import React, { Component } from 'react';
import MachineTable from './components/MachineTable';

export default class MachineList extends Component {
  render() {
    return (
      <div className="table">
        <MachineTable />
      </div>
    );
  }
}
