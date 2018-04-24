import { MenuData } from '../data/index';

export const menuReducer = (state = { menu: MenuData }, action) => {
  switch (action.type) {
    case 'GET_MENU':
      return {
        menu: [...state.menu]
      };

    default:
      return state;
  }
};