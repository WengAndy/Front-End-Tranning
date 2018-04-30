import { MachineData } from '../data/index';

const pageParameter = {
  pageSize: 5,
  currentPage: 1,
};

function pagination(pageNo, array) {
  let page = pageNo;
  if (page === '') {
    page = pageParameter.currentPage;
  }
  const offset = (page - 1) * pageParameter.pageSize;
  return (offset + pageParameter.pageSize >= array.length)
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + pageParameter.pageSize);
}

export function getMachine(page, data) {
  const machineData = pagination(page || pageParameter.currentPage, data || MachineData);
  return {
    type: 'GET_MACHINE',
    payload: machineData
  };
}


export function addMachine(machineDatas, parameter) {
  const machineData = [...machineDatas, parameter];
  return {
    type: 'ADD_MACHINE',
    payload: machineData
  };
}

export function editMachine(item, machineData, parameter) {
  const index = machineData.findIndex(line => line.device_id === item.device_id);
  machineData[index].address = parameter.addressName;
  machineData[index].region = parameter.regionName;
  return {
    type: 'EDIT_MACHINE',
    payload: machineData
  };
}

export function delMachine(data, machineData) {
  machineData.splice(machineData.findIndex(alldata => alldata.device_id === data.device_id), 1);
  return {
    type: 'DEL_MACHINE',
    payload: machineData
  };
}

export function searchMachine(search, machineData) {
  let searchArr = [];
  searchArr = machineData.filter(result => result.address.includes(search) || result.region.includes(search));
  return {
    type: 'SEARCH_MACHINE',
    payload: searchArr
  };
}

export function advancedSearchMachine(search, selectValue, machineData) {
  let searchArr = [];
  searchArr = machineData.filter(result => result.status.includes(selectValue) &&
    (result.address.includes(search) || result.region.includes(search)));
  return {
    type: 'ADVANCED_SEARCH_MACHINE',
    payload: searchArr
  };
}
