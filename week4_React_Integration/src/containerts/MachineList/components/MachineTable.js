import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MachineList from './MachineList';
import { getMachine, editMachine, delMachine, searchMachine, advancedSearchMachine } from '../../../actions';

class MachineTable extends Component {
  state = {
    machineList: this.props.searchmachineList || this.props.machineList,
  };

  componentWillMount() {
    this.props.getMachine();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      machineList: nextProps.searchmachineList || nextProps.machineList,
    });
  }

  editData = (item, parameter) => {
    const machineData = this.props.machineList;
    this.props.editMachine(item, machineData, parameter);
    if (window.localStorage.getItem('searchValue') !== null) {
      if (window.localStorage.getItem('search') === 'search') {
        this.props.searchMachine(
          window.localStorage.getItem('searchValue'),
          machineData
        );
      } else {
        this.props.advancedSearchMachine(
          window.localStorage.getItem('searchValue'),
          window.localStorage.getItem('searchSelect'),
          machineData
        );
      }
    }
  };

  delData = (data) => {
    const confirm = window.confirm('Are you sure you want to delete this data?');
    if (!confirm) return;
    const machineData = this.props.machineList;
    this.props.delMachine(data, machineData);
    if (window.localStorage.getItem('searchValue') !== null) {
      if (window.localStorage.getItem('search') === 'search') {
        this.props.searchMachine(
          window.localStorage.getItem('searchValue'),
          machineData
        );
      } else {
        this.props.advancedSearchMachine(
          window.localStorage.getItem('searchValue'),
          window.localStorage.getItem('searchSelect'),
          machineData
        );
      }
    }
  }

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
    searchmachineList: parameter.searchmachineList.searchmachineList,
  };
};

const mapDispatchToProps = (dispatch) => {
  const parameter = dispatch;
  return bindActionCreators({
    getMachine,
    editMachine,
    delMachine,
    searchMachine,
    advancedSearchMachine
  }, parameter);
};

MachineTable.propTypes = {
  machineList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showDetailModal: PropTypes.func.isRequired,
  editMachine: PropTypes.func.isRequired,
  delMachine: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MachineTable);
