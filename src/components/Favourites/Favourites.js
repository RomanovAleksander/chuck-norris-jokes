import React from 'react';
import { connect } from 'react-redux';
import { addJoke, removeJoke } from '../../actions/jokes/actions';
import { JokeList } from '../JokeList';
import './favourites.scss';

const Favourites = ({ jokes, favouritesJokes, loading, error, addJoke, removeJoke }) => {
  return (
    <div className="favourites-container">
      <div className="favourites-title">Favorite</div>
      <JokeList jokes={jokes}
                favouritesJokes={favouritesJokes}
                loading={loading}
                error={error}
                addJoke={addJoke}
                removeJoke={removeJoke}
                favourites={true} />
    </div>
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
  error: state.jokes.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favourites);