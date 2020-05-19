import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NotFoundPage } from '../../pages';

import './app.scss';

const App = () => {
  return (
    <div>
      <Switch>
        <Redirect from="/"
                  to="/jokes"
                  exact
        />
        <Route path="/jokes" component={() => {
          return (
            <div>
              Jokes
            </div>
          );
        }} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {

  }
};

export default connect(mapStateToProps)(App);
