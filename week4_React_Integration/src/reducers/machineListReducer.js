import { MachineData } from '../data/index';

export const machineListReducer = (state = { machineList: MachineData }, action) => {
  switch (action.type) {
    case 'GET_MACHINE':
      return {
        machineList: [...action.payload.machineData],
        pageItem: action.payload.pageItem
      };
      break;
    // case 'ADD_MACHINE':
    //   return {
    //     machineList: [...action.payload]
    //   };
    //   break;
    // case 'EDIT_MACHINE':
    //   return {
    //     machineList: [...action.payload]
    //   };
    //   break;
    // case 'DEL_MACHINE':
    //   return {
    //     machineList: [...action.payload],
    //   };
    //   break;
    // case 'SEARCH_MACHINE':
    //   return {
    //     machineList: [...state.machineList],
    //     searchmachineList: [...action.payload]
    //   };
    //   break;
    // case 'ADVANCED_SEARCH_MACHINE':
    //   return {
    //     machineList: [...state.machineList],
    //     searchmachineList: [...action.payload]
    //   };
    //   break;
    // case 'GET_PAGE_ITEM':
    //   console.log('action', action.payload);
    //   return {
    //     getPageItem: [...action.payload],
    //   };
    //   break;
    default:
      return state;
  }
};