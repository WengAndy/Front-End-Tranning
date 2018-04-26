import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MachineList from './MachineList';
import { editMachine, delMachine } from '../../../actions';

class MachineTable extends Component {
  state = {
    machineList: this.props.machineList,
  };

  editData = (item, parameter) => {
    const machineData = this.state.machineList;
    this.props.editMachine(item, machineData, parameter);
  };

  delData = (data) => {
    const confirm = window.confirm('Are you sure you want to delete this data?');
    if (!confirm) return;
    const machineData = this.state.machineList;
    this.props.delMachine(data, machineData);
  }
  // constructor(data, pageNo) {
  //   const $mainTemplate = $($('#template-data-table').html());
  //   const $mainTable = $mainTemplate.find('.tbody');
  //   const apihandle = new ApiHandle();
  //   if (data === false || data.length === 0) {
  //     $mainTable.append('no data');
  //   } else {
  //     const countData = apihandle.pagination(pageNo || 1, data);
  //     countData.forEach((list) => {
  //       const $ListTitle = new ListTitle(list);
  //       $mainTable.append($ListTitle.result());
  //     });
  //   }
  //   this.listTable = $mainTemplate;
  // }

  render() {
    return (
      <div id="table" className="css-table">
        <div className="thead">
          <div className="tr">
            <div className="th th-left">Device ID</div>
            <div className="th">Model</div>
            <div className="th">Status</div>
            <div className="th">Machine Temp.</div>
            <div className="th">Address</div>
            <div className="th">Region</div>
            <div className="th">Details</div>
            <div className="th" />
            <div className="th">Setup</div>
            <div className="th th-right" />
          </div>
        </div>
        <div className="gate" />
        <div className="tbody">
          {
            this.state.machineList.map(item => (
              <MachineList
                key={item.device_id}
                item={item}
                showDetailModal={this.props.showDetailModal}
                editData={this.editData}
                delData={this.delData}
              />
            ))
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const parameter = state;
  return {
    machineList: parameter.machineList.machineList,
  };
};

const mapDispatchToProps = (dispatch) => {
  const parameter = dispatch;
  return bindActionCreators({
    editMachine,
    delMachine
  }, parameter);
};

MachineTable.propTypes = {
  machineList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showDetailModal: PropTypes.func.isRequired,
  editMachine: PropTypes.func.isRequired,
  delMachine: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MachineTable);