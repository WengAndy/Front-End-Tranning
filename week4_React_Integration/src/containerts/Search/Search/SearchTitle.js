import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { CommonModal } from '../../../components';
import { addMachine, searchMachine } from '../../../actions';

class SearchTitle extends Component {
  state = {
    modalStatus: false,
    detail: {},
    searchValue: ''
  };

  handleSearch = () => {
    const machineData = this.props.machineList;
    const parameter = this.state.searchValue;
    window.localStorage.setItem('searchValue', parameter);
    this.props.searchMachine(parameter, machineData);
  }

  handleSearchChange = (data) => {
    this.setState({
      searchValue: data
    });
  }

  showDetailModal = (status, data) => {
    this.setState({
      modalStatus: true,
      detail: {
        status,
        data
      }
    });
  }

  saveDetailModal = (data) => {
    const machineData = this.props.machineList;
    const parameter = data;
    this.props.addMachine(machineData, parameter);
    this.setState({
      modalStatus: false,
    });
  }

  closeDetailModal = () => {
    this.setState({
      modalStatus: false,
    });
  }
  render() {
    const item = this.props.machineList;
    return (
      <div className="functions">
        <div className="initDiv">
          <div className="search">
            <input className="search-box" type="text" name="search-box" placeholder="keyword" onChange={e => this.handleSearchChange(e.target.value)} />
            <input className="search-btn" type="submit" name="search-btn" value="Search" onClick={() => this.handleSearch()} />
            <div className="advanced-search-dialog">
              <input type="text" className="form-control advanced-search-Input" placeholder="keyword" />
              <div className="search-type">
                Packaging Type
                <select className="select-search">
                  <option value="">Select</option>
                  <option value="0">online</option>
                  <option value="1">offline</option>
                  <option value="2">error</option>
                </select>
              </div>
              <div>
                <button className="btn advanced-close" type="button">Close</button>
                <button className="btn advanced-search" type="button">Search</button>
              </div>
            </div>
            <button className="searchmore">
              <i className="fas fa-search-plus" />
              Advanced Search
            </button>
          </div>
          <button
            className="addmore"
            onClick={() => this.showDetailModal('Add', item)}
          >
            <i className="fas fa-plus-circle" />
            Add Machine
          </button>
        </div>
        <CommonModal
          modalStatus={this.state.modalStatus}
          saveDetailModal={this.saveDetailModal}
          closeDetailModal={this.closeDetailModal}
          detail={this.state.detail}
        />
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
    addMachine,
    searchMachine
  }, parameter);
};

SearchTitle.propTypes = {
  machineList: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTitle);

