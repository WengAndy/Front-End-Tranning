import React, { Component } from 'react';
import MachineTable from './components/MachineTable';
import { CommonModal } from '../../components';

export default class MachineList extends Component {
  state = {
    modalStatus: false,
    detail: {},
  };
  showDetailModal = (status, data) => {
    this.setState({
      modalStatus: true,
      detail: {
        status,
        data
      }
    });
  }

  closeDetailModal = () => {
    this.setState({
      modalStatus: false,
    });
  }

  render() {
    return (
      <div className="table">
        <MachineTable
          showDetailModal={this.showDetailModal}
        />
        <CommonModal
          modalStatus={this.state.modalStatus}
          closeDetailModal={this.closeDetailModal}
          detail={this.state.detail}
        />
      </div>
    );
  }
}
