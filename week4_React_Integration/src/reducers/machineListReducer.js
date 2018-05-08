import { MachineData } from '../data/index';

export const machineListReducer = (state = { machineList: MachineData }, action) => {
  switch (action.type) {
    case 'GET_MACHINE':
      return {
        machineList: [...action.payload.machineData],
        pageItem: action.payload.pageItem
      };
      break;
    default:
      return state;
  }
};