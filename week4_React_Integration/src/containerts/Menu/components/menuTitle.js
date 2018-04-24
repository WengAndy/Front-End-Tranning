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

  componentDidMount() {
    console.log('BooksContainer componentDidMount');
    // getMenu();
  }
  // constructor(menu) {
  //   const $mainTemplate = $($('#template-menu').html());
  //   const $menuList = $mainTemplate.find('.list');
  //   const $menuTitle = $menuList.find('.menuTitle');
  //   const $subName = $mainTemplate.find('.subName');
  //   $menuTitle.find('i').addClass(`${menu.icon}`);
  //   $menuTitle.find('.menuName').text(`${menu.menuName}`);

  //   menu.subMenu.forEach((submenu) => {
  //     const $mainTemplateSubItem = $($('#template-menu').html()).find('.subMenuItem');
  //     const $subTitle = $mainTemplateSubItem.find('li');
  //     const $subItem = $mainTemplateSubItem.find('span').text(`${submenu.subMenuName}`);
  //     $subItem.click(() => {
  //       $('.subNameText').removeClass('focus');
  //       $subItem.addClass('focus');
  //     });
  //     $subName.append($subTitle);
  //   });

  //   this.MenuTitle = $menuList;

  //   $menuList.click(() => {
  //     $('.list').removeClass('active');
  //     $menuList.toggleClass('active');
  //   });

  //   $menuTitle.click(() => {
  //     $('.menuName').removeClass('focus');
  //   });
  // }

  // result() {
  //   return this.MenuTitle;
  // }

  render() {
    return (
      this.state.menu.map(menuData => (
        <nav key={menuData.id} id="menu">
          <div className="list">
            <div className="menuTitle">
              <i className={menuData.icon} />
              <span className="menuName">
                {menuData.menuName}
              </span>
            </div>
            <ul className="subName">
              {
                menuData.subMenu.map(item => (
                  <MenuItem
                    key={item.subId}
                    item={item}
                    // onClickFocusFunc={this.onClickFocusFunc}
                  />
                ))
              }
            </ul>
          </div>
        </nav>
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
