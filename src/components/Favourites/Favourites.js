import React from 'react';
import { connect } from 'react-redux';
import { addJoke, removeJoke, toggleMenu } from '../../actions/jokes/actions';
import { JokeList } from '../JokeList';
import './favourites.scss';

const Favourites = ({ jokes, favouritesJokes, loading, error, addJoke, removeJoke, toggleMenu, isOpen }) => {
  const isMenuOpen = isOpen ? 'open' : 'close';
  if (isOpen) {
    document.body.style.overflow= "hidden";
  } else {
    document.body.style.overflow= "auto";
  }

  return (
    <>
      <div className='menu' onClick={() => toggleMenu()}>
        {isOpen
          ?
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="#333333"/>
            <rect width="14.8492" height="2.12131" rx="1.06065" transform="matrix(0.707103 -0.707111 0.707103 0.707111 8 18.5)" fill="white"/>
            <rect width="14.8492" height="2.12131" rx="1.06065" transform="matrix(0.707103 0.707111 -0.707103 0.707111 9.5 8)" fill="white"/>
          </svg>
          :
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="#333333"/>
            <rect x="7" y="16" width="14" height="2" rx="1" fill="white"/>
            <rect x="7" y="10" width="14" height="2" rx="1" fill="white"/>
          </svg>
        }
        <span>Favourite</span>
      </div>
      <div className={`favourites-container ${isMenuOpen}`}>
        <div className="favourites-title">Favorite</div>
        <JokeList jokes={jokes}
                  favouritesJokes={favouritesJokes}
                  loading={loading}
                  error={error}
                  addJoke={addJoke}
                  removeJoke={removeJoke}
                  favourites={true}/>
      </div>
    </>
  )
};

const mapDispatchToProps = {
  addJoke,
  removeJoke,
  toggleMenu
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
)(Favourites);