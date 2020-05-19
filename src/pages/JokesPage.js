import React from 'react';
import { Header } from '../components/Header/Header';
import Form from '../components/Form/Form';

export const JokesPage = () => {
  return (
    <>
      <div className="main-container">
        <Header/>
        <Form/>
      </div>
      <div className="favourite-container">
      </div>
    </>
  );
};
