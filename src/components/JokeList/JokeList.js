import React from 'react';
import {connect} from 'react-redux';
import {JokeItem} from '../JokeItem';
import './jokeList.scss';

const JokeList = ({ jokes, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>
  }

  if (jokes) {
    return (
      <div className="joke-list">
        {
          jokes.map((joke) => {
            return (
              <div key={joke.id}>
                <JokeItem joke={joke}/>
              </div>
            )
          })
        }
      </div>
    )
  }
};

const mapDispatchToProps = {

};

const mapStateToProps = state => ({
  jokes: state.jokes.jokes,
  loading: state.jokes.loading,
  error: state.jokes.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JokeList);
