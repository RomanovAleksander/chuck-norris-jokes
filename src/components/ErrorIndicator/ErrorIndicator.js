import React from 'react';
import './errorIndicator.scss';

export const ErrorIndicator = ({ status }) => {
  return (
    <>
    <div className="error-indicator">
      Ops... Something went wrong
      {status &&  <p>Try reload the page</p>}
    </div>
    </>
  )
};
