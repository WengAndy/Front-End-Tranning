import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { CommonModal } from '../../../components';
import { addMachine, getMachine, searchMachine, advancedSearchMachine } from '../../../actions';

class SearchTitle extends Component {
  state = {
    modalStatus: false,
    advanceSearchDialog: false,
    detail: {},
    searchValue: '',
    advancedSearch: '',
    advancedSelectSearch: ''
  };

  handleSearch = () => {
    const machineData = JSON.parse(window.localStorage.getItem('machineData'));
    const search = this.state.searchValue;
    const searchResult = this.props.searchMachine(search, machineData);
    window.localStorage.setItem('searchResult', JSON.stringify(searchResult));
    window.localStorage.setItem('search', 'search');
    window.localStorage.setItem('searchValue', search);
    window.localStorage.setItem('currentPage', 1);
    this.props.getMachine(1, searchResult.searchArr);
  }

  handleAdvancedSearch = () => {
    const machineData = JSON.parse(window.localStorage.getItem('machineData'));
    const advancedSearchValue = this.state.advancedSearch;
    const advancedSearchSelectValue = this.state.advancedSelectSearch;
    const type = {
      0: 'online',
      1: 'offline',
      2: 'error'
    };
    const searchResult = this.props.advancedSearchMachine(advancedSearchValue, type[advancedSearchSelectValue], machineData);
    window.localStorage.setItem('searchResult', JSON.stringify(searchResult));
    window.localStorage.setItem('search', 'advancedSearch');
    window.localStorage.setItem('searchValue', advancedSearchValue);
    window.localStorage.setItem('searchSelect', type[advancedSearchSelectValue]);
    window.localStorage.setItem('currentPage', 1);
    this.props.getMachine(1, searchResult.searchArr);
  }

  showSearchDialog = () => {
    this.setState({
      advanceSearchDialog: true
    });
  }

  closeSearchDialog = () => {
    this.setState({
      advanceSearchDialog: false
    });
  }

  handleSearchChange = (data) => {
    this.setState({
      searchValue: data
    });
  }

  handleAdvancedSearchChange = (data) => {
    this.setState({
      advancedSearch: data
    });
  }

  handleSelectSearchChange = (data) => {
    this.setState({
      advancedSelectSearch: data
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
    const machineData = JSON.parse(window.localStorage.getItem('machineData'));
    const parameter = data;
    const addResult = this.props.addMachine(machineData, parameter);
    this.setState({
      modalStatus: false,
    });
    window.localStorage.setItem('currentPage', 1);
    window.localStorage.setItem('machineData', JSON.stringify(addResult.machineData));
    this.props.getMachine(1, addResult.machineData);
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
            {
              this.state.advanceSearchDialog &&
              <div className="advanced-search-dialog">
                <input
                  type="text"
                  className="form-control advanced-search-Input"
                  placeholder="keyword"
                  onChange={e => this.handleAdvancedSearchChange(e.target.value)}
                />
                <div className="search-type">
                  Packaging Type
                  <select
                    className="select-search"
                    onChange={e => this.handleSelectSearchChange(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="0">online</option>
                    <option value="1">offline</option>
                    <option value="2">error</option>
                  </select>
                </div>
                <div>
                  <button
                    className="btn advanced-close"
                    type="button"
                    onClick={() => this.closeSearchDialog()}
                  >
                    Close
                  </button>
                  <button
                    className="btn advanced-search"
                    type="button"
                    onClick={() => this.handleAdvancedSearch()}
                  >
                    Search
                  </button>
                </div>
              </div>
            }
            <button
              className="searchmore"
              onClick={() => this.showSearchDialog()}
            >
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
    getMachine,
    searchMachine,
    advancedSearchMachine
  }, parameter);
};

SearchTitle.propTypes = {
  machineList: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTitle);

