import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMachine } from '../../actions';

class FooterPageItem extends Component {
  render() {
    const { data } = this.props;
    let chooseStatus = '';
    if (window.localStorage.getItem('currentPage') === data.toString()) {
      chooseStatus = 'active';
    }
    return (
      <li className="page-item">
        <a
          className={`th-page-link ${chooseStatus}`}
          href="javascript:void(0)"
          onClick={() => this.props.page(data)}
        >
          {data}
        </a>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const parameter = dispatch;
  return bindActionCreators({
    getMachine
  }, parameter);
};

export default connect(mapDispatchToProps)(FooterPageItem);
