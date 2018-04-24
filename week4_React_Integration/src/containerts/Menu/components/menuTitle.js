import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuItem from '../components/menuItem';
// import { bindActionCreators } from 'redux';
// import { MenuData } from '../../../data/index';
// import { getMenu } from '../../../actions';

class MenuTitle extends Component {
  state = {
    menu: this.props.menu,
  };

  componentDidMount() {}

  onClickFocusFunc = (menuData, item) => {
    const itemData = this.state.menu.map((data) => {
      data.subMenu.map((subMenuFocus) => {
        if (subMenuFocus.checkStatus === true) {
          subMenuFocus.checkStatus = false;
        } else {
          data.checkStatus = false;
        }
        menuData.checkStatus = true;
        item.checkStatus = true;
        return data;
      });
      return data;
    });
    this.setState({
      menu: itemData
    });
  }

  render() {
    return (
      this.state.menu.map(menuData => (
        <div key={menuData.id} className={`list ${menuData.checkStatus === true ? 'active' : ''}`}>
          <div className="menuTitle">
            <i className={menuData.icon} />
            <span className="menuName" >
              {menuData.menuName}
            </span>
          </div>
          <ul className="subName">
            {
              menuData.subMenu.map(item => (
                <MenuItem
                  key={item.subId}
                  menuData={menuData}
                  item={item}
                  onClickFocusFunc={this.onClickFocusFunc}
                />
              ))
            }
          </ul>
        </div>
      ))
    );
  }
}

const mapStateToProps = (state) => {
  const parameter = state;
  return {
    menu: parameter.menuList.menu,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   console.log('mapDispatchToProps');
//   return bindActionCreators({
//     getMenu,
//   }, dispatch);
// };

MenuTitle.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  // menu: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(MenuTitle);
