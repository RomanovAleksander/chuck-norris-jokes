import {
  FETCH_JOKE_REQUEST,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
  FETCH_JOKES_REQUEST,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE,
  ADD_JOKE,
  REMOVE_JOKE,
  TOGGLE_MENU
} from '../actions/jokes/types';
import { LocalStorageService } from '../services';

const initialState = {
  jokes: [],
  favouritesJokes: [],
  joke: {},
  searchText: '',
  loading: false,
  error: null,
  isOpen: false
};

const updateJokeList = (jokesList, item, idx) => {
  if (idx === -1) {
    return [
      ...jokesList,
      item
    ]
  }
  return [
    ...jokesList.slice(0, idx),
    item,
    ...jokesList.slice(idx + 1)
  ]
};

export const jokes = (state, action) => {
  const { type, payload } = action;
  if (state === undefined) {
    if (localStorage.favouritesJokes) {
      return {
        ...initialState,
        favouritesJokes: LocalStorageService.getItem('favouritesJokes')
      }
    } else {
      return initialState;
    }
  }

  switch (type) {
    case FETCH_JOKE_REQUEST:
      return {
        ...state,
        joke: {},
        loading: true,
        error: null
      };
    case FETCH_JOKE_SUCCESS:
      const jokeIndex = state.jokes.findIndex((item) => item.id === payload.id);

      return {
        ...state,
        jokes: updateJokeList(state.jokes, payload, jokeIndex),
        joke: payload,
        loading: false,
        error: null
      };
    case FETCH_JOKE_FAILURE:
      return {
        ...state,
        jokes: [],
        joke: {},
        loading: false,
        error: payload
      };
    case FETCH_JOKES_REQUEST:
      return {
        ...state,
        joke: {},
        loading: true,
        error: null
      };
    case FETCH_JOKES_SUCCESS:
      const itemsIndices = [];
      payload.result.map((joke) => {
        const itemIndex = state.jokes.findIndex((item) => item.id === joke.id);
        itemsIndices.push(itemIndex);
        return null;
      });

      let newJokes = state.jokes;
      for (let i=0; i<itemsIndices.length; i++) {
        newJokes = updateJokeList(newJokes, payload.result[i], itemsIndices[i]);
      }

      return {
        ...state,
        jokes: [...newJokes],
        loading: false,
        error: null
      };
    case FETCH_JOKES_FAILURE:
      return {
        ...state,
        jokes: [],
        loading: false,
        error: payload
      };
    case ADD_JOKE:
      const newFavouritesJokes = [...state.favouritesJokes, payload];
      LocalStorageService.setItem('favouritesJokes', newFavouritesJokes);
      return {
        ...state,
        favouritesJokes: newFavouritesJokes
      };
    case REMOVE_JOKE:
      const updatedFavouritesJokes = state.favouritesJokes.filter((joke) => joke.id !== payload);
      LocalStorageService.setItem('favouritesJokes', updatedFavouritesJokes);
      return {
        ...state,
        favouritesJokes: updatedFavouritesJokes
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};
