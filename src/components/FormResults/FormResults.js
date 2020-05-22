import React from 'react';
import { connect } from 'react-redux';
import { addJoke, removeJoke } from '../../actions/jokes/actions';
import { JokeList } from '../JokeList';

const FormResults = ({ jokes, favouritesJokes, loading, error, addJoke, removeJoke, isOpen }) => {
  const background = isOpen ? 'background' : '';

  return (
    <>
      <div className={background}> </div>
      <JokeList jokes={jokes}
                favouritesJokes={favouritesJokes}
                loading={loading}
                error={error}
                addJoke={addJoke}
                removeJoke={removeJoke}
                favourites={false}/>
    </>
  )
};

const mapDispatchToProps = {
  addJoke,
  removeJoke
};

const mapStateToProps = state => ({
  jokes: state.jokes.jokes,
  favouritesJokes: state.jokes.favouritesJokes,
  loading: state.jokes.loading,
  error: state.jokes.error,
  isOpen: state.jokes.isOpen
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormResults);
