import {
  FETCH_JOKE_REQUEST,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
  FETCH_JOKES_REQUEST,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE,
  SEARCH_JOKES
} from '../actions/jokes/types';

const initialState = {
  jokes: [],
  joke: {},
  searchText: '',
  loading: false,
  error: null
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

export const jokes = (state = initialState, action) => {
  const { type, payload } = action;
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
    case SEARCH_JOKES:
      return {
        ...state,
        searchText: payload.searchText
      };

    default:
      return state;
  }
};
