import React from 'react';
import { Header } from '../components/Header/Header';
import Form from '../components/Form/Form';
import JokeList from '../components/JokeList/JokeList';
import { ScrollArrow } from '../components/ScrollArrow';

export const JokesPage = () => {
  return (
    <>
      <div className="main-container">
        <Header/>
        <Form/>
        <JokeList/>
        <ScrollArrow />
      </div>
      <div className="favourite-container">
      </div>
    </>
  );
};
