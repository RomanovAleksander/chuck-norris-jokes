import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from '../actions/categories/types';

const initialState = {
  categories: [],
  loading: true,
  error: null
};

export const categories = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: [],
        loading: true,
        error: null
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        loading: false,
        error: null
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categories: [],
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};
