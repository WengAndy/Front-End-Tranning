import { MachineData } from '../data/index';

const initialState = {
  MachineData
};

export const machineListReducer = (state = { machineList: initialState.MachineData }, action) => {
  switch (action.type) {
    case 'GET_MACHINE':
      return {
        machineList: [...action.payload]
      };
      break;
    case 'ADD_MACHINE':
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
        machineList: [...action.payload],
      };
      break;
    case 'SEARCH_MACHINE':
      return {
        machineList: [...state.machineList],
        searchmachineList: [...action.payload]
      };
      break;
    case 'ADVANCED_SEARCH_MACHINE':
      return {
        machineList: [...state.machineList],
        searchmachineList: [...action.payload]
      };
      break;
    default:
      return state;
  }
};