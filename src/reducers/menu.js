import {
  TOGGLE_MENU
} from '../actions/menu/types';

const initialState = {
  isOpen: false
};

export const menu = (state = initialState, action) => {
  const { type } = action;

  if (type === TOGGLE_MENU) {
    return {
      ...state,
      isOpen: !state.isOpen,
    };
  } else {
    return state;
  }
};

