import { MachineData } from '../data/index';

export const machineListReducer = (state = { machineList: MachineData }, action) => {
  switch (action.type) {
    case 'GET_MACHINE':
      return {
        machineList: [...state.machineList]
      };
      break;
    default:
      return state;
  }
};