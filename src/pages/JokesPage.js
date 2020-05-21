import React from 'react';
import { Header } from '../components/Header/Header';
import Form from '../components/Form/Form';
import { FormResults } from '../components/FormResults';
import { ScrollArrow } from '../components/ScrollArrow';
import { Favourites } from '../components/Favourites';

export const JokesPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <Form />
        <FormResults />
        <ScrollArrow />
      </div>
      <Favourites />
    </>
  );
};
