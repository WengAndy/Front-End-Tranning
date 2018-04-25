import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MachineList from './MachineList';

class MachineTable extends Component {
  state = {
    machineList: this.props.machineList,
  };
  // constructor(data, pageNo) {
  //   const $mainTemplate = $($('#template-data-table').html());
  //   const $mainTable = $mainTemplate.find('.tbody');
  //   const apihandle = new ApiHandle();
  //   if (data === false || data.length === 0) {
  //     $mainTable.append('no data');
  //   } else {
  //     const countData = apihandle.pagination(pageNo || 1, data);
  //     countData.forEach((list) => {
  //       const $ListTitle = new ListTitle(list);
  //       $mainTable.append($ListTitle.result());
  //     });
  //   }
  //   this.listTable = $mainTemplate;
  // }

  render() {
    return (
      <div id="table" className="css-table">
        <div className="thead">
          <div className="tr">
            <div className="th th-left">Device ID</div>
            <div className="th">Model</div>
            <div className="th">Status</div>
            <div className="th">Machine Temp.</div>
            <div className="th">Address</div>
            <div className="th">Region</div>
            <div className="th">Details</div>
            <div className="th" />
            <div className="th">Setup</div>
            <div className="th th-right" />
          </div>
        </div>
        <div className="gate" />
        <div className="tbody">
          {
            this.state.machineList.map(item => (
              <MachineList
                key={item.device_id}
                item={item}
              />
            ))
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const parameter = state;
  return {
    machineList: parameter.machineList.machineList,
  };
};

MachineTable.propTypes = {
  machineList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(MachineTable);
