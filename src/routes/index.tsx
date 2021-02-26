import React from 'react';
import { Switch, Route } from 'react-router-dom';

import signIn from '../pages/signIn';
import signUp from '../pages/signUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={signIn} />
    <Route path="/signup" component={signUp} />
  </Switch>
);
export default Routes;
