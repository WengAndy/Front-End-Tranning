import { MachineData } from '../data/index';

const initialState = {
  MachineData
};

export const machineListReducer = (state = { machineList: initialState.MachineData }, action) => {
  switch (action.type) {
    case 'GET_MACHINE':
      return {
        machineList: [...state.machineList]
      };
      break;
    case 'EDIT_MACHINE':
      return {
        machineList: [action]
      };
      break;
    case 'DEL_MACHINE':
      return {
        machineList: [action]
      };
      break;
    default:
      return state;
  }
};