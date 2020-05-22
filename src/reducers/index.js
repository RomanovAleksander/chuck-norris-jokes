import { combineReducers } from 'redux';
import { jokes } from './jokes';
import { categories } from './categories';
import { menu } from './menu';

export const reducer = combineReducers({
  jokes: jokes,
  categories: categories,
  menu: menu,
});
