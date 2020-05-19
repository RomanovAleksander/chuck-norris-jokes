import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {JokesPage, NotFoundPage} from '../../pages';

import './app.scss';

const App = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Redirect from="/"
                  to="/jokes"
                  exact
        />
        <Route path="/jokes" component={JokesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
};

export default App;
