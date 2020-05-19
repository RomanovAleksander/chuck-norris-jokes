import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS
} from './types';

const categoriesRequested = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST
  }
};

const categoriesLoaded = (newCategories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: newCategories
  }
};

const categoriesError = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
};

export {
  categoriesRequested,
  categoriesLoaded,
  categoriesError
};
