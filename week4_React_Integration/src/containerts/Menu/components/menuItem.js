import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MenuItem extends Component {
  componentDidMount() {
  }

  render() {
    const {
      item,
      menuData
    } = this.props;
    return (
      <div className="subMenuItem">
        <li>
          <Link
            to={`/MenuList/${item.subId}`}
            className="subMenuItem"
            onClick={() => this.props.onClickFocusFunc(menuData, item)}
          >
            <span key={item.subId} className={`subNameText ${item.checkStatus === true ? 'focus' : ''}`}>
              {item.subMenuName}
            </span>
          </Link>
        </li>
      </div>
    );
  }
}

MenuItem.propTypes = {
  item: PropTypes.shape().isRequired,
  menuData: PropTypes.shape().isRequired,
  onClickFocusFunc: PropTypes.func.isRequired
};

export default MenuItem;
