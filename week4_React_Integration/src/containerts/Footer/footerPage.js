import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FooterPageItem from './footerpageItem';
// import { getPageItem } from '../../actions';

class FooterPage extends Component {
  render() {
    return (
      <div className="page">
        <div className="page-init">
          <div className="quantity">
            <span className="rowsPerPage" />
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-top">
                <a className="th-page-link" href="javascript:void(0)" aria-label="Previous">
                  <span aria-hidden="true">
                    <i className="fas fa-angle-double-left" />
                  </span>
                </a>
              </li>
              <li className="page-prev">
                <a className="th-page-link" href="javascript:void(0)" aria-label="Previous">
                  <span aria-hidden="true">
                    <i className="fas fa-angle-left" />
                  </span>
                </a>
              </li>
              <FooterPageItem />
              <li className="page-next">
                <a className="th-page-link" href="javascript:void(0)" aria-label="Next">
                  <span aria-hidden="true">
                    <i className="fas fa-angle-right" />
                  </span>
                </a>
              </li>
              <li className="page-end">
                <a className="th-page-link" href="javascript:void(0)" aria-label="Next">
                  <span aria-hidden="true">
                    <i className="fas fa-angle-double-right" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const parameter = state;
  return {
    // getPageItem: parameter.getPageItem.getPageItem,
    machineList: parameter.machineList.machineList,
    searchmachineList: parameter.searchmachineList.searchmachineList,
  };
};

const mapDispatchToProps = (dispatch) => {
  const parameter = dispatch;
  return bindActionCreators({
    // getPageItem,
  }, parameter);
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterPage);
