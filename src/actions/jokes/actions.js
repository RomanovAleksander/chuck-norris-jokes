import {
  FETCH_JOKE_FAILURE,
  FETCH_JOKE_REQUEST,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKES_FAILURE,
  FETCH_JOKES_REQUEST,
  FETCH_JOKES_SUCCESS,
  ADD_JOKE,
  REMOVE_JOKE
} from './types';

const jokeRequested = () => {
  return {
    type: FETCH_JOKE_REQUEST
  }
};

const jokeLoaded = (newJoke) => {
  return {
    type: FETCH_JOKE_SUCCESS,
    payload: newJoke
  }
};

const jokeError = (error) => {
  return {
    type: FETCH_JOKE_FAILURE,
    payload: error
  };
};

const jokesRequested = () => {
  return {
    type: FETCH_JOKES_REQUEST
  }
};

const jokesLoaded = (newJokes) => {
  return {
    type: FETCH_JOKES_SUCCESS,
    payload: newJokes
  }
};

const jokesError = (error) => {
  return {
    type: FETCH_JOKES_FAILURE,
    payload: error
  };
};

const addJoke = (joke) => {
  return {
    type: ADD_JOKE,
    payload: joke
  };
};

const removeJoke = (joke) => {
  return {
    type: REMOVE_JOKE,
    payload: joke.id
  };
};

export {
  jokeRequested,
  jokeLoaded,
  jokeError,
  jokesRequested,
  jokesLoaded,
  jokesError,
  addJoke,
  removeJoke
};
