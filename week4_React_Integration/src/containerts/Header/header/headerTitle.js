import React, { Component } from 'react';
import userImg from '../../../img/user.jpg';

class HeaderTitle extends Component {
  render() {
    return (
      <div className="header">
        <div className="link">
          <a href="#">Machine Management</a>
          {' > '}
          <a href="#">Model List</a>
        </div>
        <div className="user">
          <a href="#">User Name
            <img className="userphoto" src={userImg} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderTitle;
