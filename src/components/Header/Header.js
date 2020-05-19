import React from 'react';
import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="title">MSI 2020</div>
      <div className="welcome">
        <span className="welcome__hey">Hey!</span>
        <span className="welcome__lets-try">Let’s try to find a joke for you:</span>
      </div>
    </header>
  )
};
