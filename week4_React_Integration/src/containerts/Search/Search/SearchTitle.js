import React, { Component } from 'react';

class SearchTitle extends Component {
  render() {
    return (
      <div className="functions">
        <div className="initDiv">
          <div className="search">
            <input className="search-box" type="text" name="search-box" placeholder="keyword" />
            <input className="search-btn" type="submit" name="search-btn" value="Search" />
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
          <button className="addmore" data-toggle="modal" data-target="#ModalDialog">
            <i className="fas fa-plus-circle" />
            Add Machine
          </button>
        </div>
      </div>
    );
  }
}

export default SearchTitle;
