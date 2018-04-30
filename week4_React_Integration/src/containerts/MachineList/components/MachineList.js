import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getMachine } from '../../../actions';

class MachineList extends Component {
  state = {
    mode: false, // 預覽
    addressName: '',
    regionName: ''
  }

  check = (data) => {
    this.setState({
      mode: false,
    });
    const { item } = this.props;
    const parameter = {
      addressName: this.state.addressName || item.address,
      regionName: this.state.regionName || item.region
    };
    this.props.editData(data, parameter);
  }

  edit = () => {
    this.setState({
      mode: true,
    });
  }

  cancel = () => {
    this.setState({
      mode: false,
      addressName: '',
      regionName: ''
    });
  }

  handleChangeAddress = (data) => {
    this.setState({
      addressName: data,
    });
  }

  handleChangeRegion = (data) => {
    this.setState({
      regionName: data,
    });
  }

  render() {
    const {
      item,
    } = this.props;
    return (
      this.state.mode === true ?
        <div className="tr">
          <div className={`td-device-id ${item.status}`} >
            {item.device_id}
          </div>
          <div className="td-model">
            {item.model}
          </div>
          <div className="td-status">
            <div className={`status status-${item.status}`}>
              {item.status}
            </div>
          </div>
          <div className="td-machine-temp">
            {item.machine_temp}
          </div>
          <div className="td-address">
            <div className="reviewMode td-address-content" />
            <input className="editMode" type="text" name="address" defaultValue={this.state.addressName || item.address} onChange={e => this.handleChangeAddress(e.target.value)} />
          </div>
          <div className="td-region">
            <div className="reviewMode td-region-content" />
            <input className="editMode" type="text" name="region" defaultValue={this.state.regionName || item.region} onChange={e => this.handleChangeRegion(e.target.value)} />
          </div>
          <div className="td">
            <button
              className="list-detail"
              onClick={() => this.props.showDetailModal('detail', item)}
            >
              <i className="far fa-calendar-alt" />
            </button>
          </div>
          <div className="td" />
          <div className="td">
            <div className="edit-icon">
              <button
                className="editMode list-cancel"
                onClick={() => this.cancel()}>
                <i className="fas fa-times" />
              </button>
              <button
                className="editMode list-check"
                onClick={() => this.check(item)}>
                <i className="fas fa-check" />
              </button>
            </div>
          </div>
          <div className="td" />
        </div>
        :
        <div className="tr">
          <div className={`td-device-id ${item.status}`} >
            {item.device_id}
          </div>
          <div className="td-model">
            {item.model}
          </div>
          <div className="td-status">
            <div className={`status status-${item.status}`}>
              {item.status}
            </div>
          </div>
          <div className="td-machine-temp">
            {item.machine_temp}
          </div>
          <div className="td-address">
            <div className="reviewMode td-address-content" />
            {item.address}
          </div>
          <div className="td-region">
            <div className="reviewMode td-region-content" />
            {item.region}
          </div>
          <div className="td">
            <button
              className="list-detail"
              onClick={() => this.props.showDetailModal('detail', item)}
            >
              <i className="far fa-calendar-alt" />
            </button>
          </div>
          <div className="td" />
          <div className="td">
            <div className="edit-icon">
              <button
                className="reviewMode list-edit"
                onClick={() => this.edit(item)}>
                <i className="fas fa-pencil-alt" />
              </button>
              <button
                className="reviewMode list-del"
                onClick={() => this.props.delData(item)}>
                <i className="far fa-trash-alt" />
              </button>
            </div>
          </div>
          <div className="td" />
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const parameter = dispatch;
  return bindActionCreators({
    getMachine,
  }, parameter);
};

MachineList.propTypes = {
  item: PropTypes.shape().isRequired,
  showDetailModal: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired,
  delData: PropTypes.func.isRequired,
};
export default connect(mapDispatchToProps)(MachineList);

