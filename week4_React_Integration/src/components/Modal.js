import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CommonModal extends Component {
  state = {
    device_id: '' || parseInt(Math.floor(Math.random() * 100), 10),
    model: '',
    status: '' || 'offline',
    machine_temp: '',
    address: '',
    region: ''
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp !== this.props.modalStatus) {
      this.setState({
        device_id: '' || parseInt(Math.floor(Math.random() * 100), 10),
        model: '',
        status: '' || 'offline',
        machine_temp: '',
        address: '',
        region: ''
      });
    }
  }

  handleAddChange = (key, e) => {
    if (key === 'device_id') {
      this.setState({
        device_id: e || parseInt(Math.floor(Math.random() * 100), 10),
      });
    }
    if (key === 'model') {
      this.setState({
        model: e || '',
      });
    }
    if (key === 'status') {
      this.setState({
        status: e || 'offline',
      });
    }
    if (key === 'machine_temp') {
      this.setState({
        machine_temp: e || '',
      });
    }
    if (key === 'address') {
      this.setState({
        address: e || '',
      });
    }
    if (key === 'region') {
      this.setState({
        region: e || '',
      });
    }
  }

  render() {
    const { detail } = this.props;
    return (
      <Modal
        isOpen={this.props.modalStatus}
      >
        <ModalHeader>
          { '詳細清單' }
        </ModalHeader>
        <ModalBody>
          {
            detail.status === 'Add' ?
            Object.keys(detail.data[0]).map(key => (
              <div key={`input_${key}`} className="detailList">
                <p className="detailName">{key.toUpperCase()}：</p>
                <input className={`input_${key}`} type="text" name="" onChange={e => this.handleAddChange(key, e.target.value)} value={this.state.key} />
              </div>
            ))
            :
            Object.keys(detail.data || {}).map(key => (
              <div key={`input_${key}`} className="detailList">
                <p className="detailName">{key}：</p>
                <p className="detailContent">{detail.data[key]}</p>
              </div>
            ))
          }
        </ModalBody>
        <ModalFooter className="modal-footer">
          {
            detail.status === 'Add' &&
            <Button
              color="primary"
              className="btn btn-primary btn-save"
              onClick={() => this.props.saveDetailModal(this.state)}
            >
              Save
            </Button>
          }
          <Button
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

CommonModal.propTypes = {
  closeDetailModal: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
  detail: PropTypes.shape().isRequired,
};

export default CommonModal;
