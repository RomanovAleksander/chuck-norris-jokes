import { combineReducers } from 'redux';
import { jokes } from './jokes';
import { categories } from './categories';

export const reducer = combineReducers({
  jokes: jokes,
  categories: categories,
});
