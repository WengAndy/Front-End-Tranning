import { MachineData } from '../data/index';

const initialState = {
  MachineData
};

export const machineListReducer = (state = { machineList: initialState.MachineData }, action) => {
  switch (action.type) {
    case 'ADD_MACHINE':
      console.log('action', action.payload);
      return {
        machineList: [...action.payload]
      };
      break;
    case 'EDIT_MACHINE':
      return {
        machineList: [...action.payload]
      };
      break;
    case 'DEL_MACHINE':
      return {
        machineList: [...action.payload]
      };
      break;
    default:
      return state;
  }
};