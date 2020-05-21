import React from 'react';
import { JokeItem } from '../JokeItem';
import { Loader } from '../Loader';
import { ErrorIndicator } from '../ErrorIndicator';
import './jokeList.scss';

export const JokeList = ({ jokes, favouritesJokes, loading, error, addJoke, removeJoke, favourites }) => {
  const isFavourites = favourites ? favouritesJokes : jokes;
  const isFav = favourites === true ? 'joke-list fav' : 'joke-list';

  if (loading && !favourites) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="joke-list">
        <ErrorIndicator />
      </div>
    )
  }

  return (
    <div className={isFav}>
      {
        isFavourites.map((joke) => {
          return (
            <div key={joke.id}>
              <JokeItem
                joke={joke}
                isFavourite={favouritesJokes.find((item) => joke.id === item.id)}
                addJoke={() => addJoke(joke)}
                removeJoke={() => removeJoke(joke)}
                favourites={favourites} />
            </div>
          )
        })
      }
    </div>
  )
};
