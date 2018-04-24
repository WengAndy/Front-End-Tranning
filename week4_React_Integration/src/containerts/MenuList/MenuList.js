import React, { Component } from 'react';

export default class MenuList extends Component {
  render() {
    return (
      <div>
          MenuList {this.props.match.params.id}
      </div>
    );
  }
}