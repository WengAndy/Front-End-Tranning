import React, { Component } from 'react';

// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import MenuItem from '../components/menuItem';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { bindActionCreators } from 'redux';
// import { MenuData } from '../../../data/index';
// import { getMenu } from '../../../actions';
class CommonModal extends Component {
  // state = {
  //   detail: this.props.detail || {},
  // };

  // componentDidMount() {}

  // onClickFocusFunc = (menuData, item) => {
  //   const itemData = this.state.menu.map((data) => {
  //     data.subMenu.map((subMenuFocus) => {
  //       if (subMenuFocus.checkStatus === true) {
  //         subMenuFocus.checkStatus = false;
  //       } else {
  //         data.checkStatus = false;
  //       }
  //       menuData.checkStatus = true;
  //       item.checkStatus = true;
  //       return data;
  //     });
  //     return data;
  //   });
  //   this.setState({
  //     menu: itemData
  //   });
  // }

  render() {
    // const { detail } = this.props;
    // console.log('detail234', this.state.detail);
    return (
      <Modal
        isOpen={this.props.modalStatus}
        // modalTransition={{ timeout: 20 }}
        // backdropTransition={{ timeout: 10 }}
        // toggle={isToggleFunc}
      >
        <ModalHeader
          // toggle={isToggleFunc}
        >
          { '詳細清單' }
        </ModalHeader>
        <ModalBody>
          {
            // detail.status === 'Add' ?
            // Object.keys(listItem[0]).map(key => (
            //   <div className="detailRow">
            //     <p className="detailTitle">{key.toUpperCase()}：</p>
            //     <input
            //       className="add-check border"
            //       onChange={e => changeInputFunc(key, e.target.value)}
            //       />
            //   </div>
            // ))
            // :
            Object.keys(this.props.detail.data || {}).map(key => (
              <div className="detailList">
                <p className="detailName">{key}：</p>
                <p className="detailContent">{this.props.detail.data[key]}</p>
              </div>
            ))
          }
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button
            color="primary"
            className="btn btn-primary btn-save"
            onClick={() => this.props.saveDetailModal()}
          >
            Save
          </Button>
          <Button
            // color="secondary"
            className="btn btn-secondary"
            onClick={() => this.props.closeDetailModal()}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
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

CommonModal.propTypes = {
  saveDetailModal: PropTypes.func.isRequired,
  closeDetailModal: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
  detail: PropTypes.shape().isRequired,
};

export default CommonModal;
