import { combineReducers } from 'redux';
import { menuReducer } from './menuReducer';
import { machineListReducer } from './machineListReducer';


export default combineReducers({
  menuList: menuReducer,
  machineList: machineListReducer,
  searchmachineList: machineListReducer,
  pageItem: machineListReducer
});