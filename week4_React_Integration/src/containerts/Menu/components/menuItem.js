import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class MenuItem extends Component {
  componentDidMount() {
  }

  render() {
    const {
      item,
    } = this.props;
    return (
      <li>
        <Link
          to={`/MenuList/${item.subId}`}
          className={`${item.isChecked === true ? 'focus' : ''}`}
          // onClick={() => onClickFocusFunc(card, item)}
        >
          <span key={item.subId} className="subNameText">
            {item.subMenuName}
          </span>
        </Link>
      </li>
    );
  }
}

// const mapStateToProps = (state) => {
//   const parameter = state;
//   return {
//     menu: parameter.menuList.menu,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   console.log('mapDispatchToProps');
//   return bindActionCreators({
//     getMenu,
//   }, dispatch);
// };

// MenuTitle.propTypes = {
//   menu: PropTypes.arrayOf(PropTypes.shape()).isRequired,
// };

MenuItem.propTypes = {
  item: PropTypes.shape().isRequired,
};

export default MenuItem;
