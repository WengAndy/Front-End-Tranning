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