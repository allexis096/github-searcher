import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Repos from '../pages/Repos';
import Followers from '../pages/Followers';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import { PrivateRoute } from './PrivateRoute';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/repos" component={Repos} />
    <PrivateRoute path="/followers" component={Followers} />
    <PrivateRoute path="/following" component={Following} />
    <PrivateRoute path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
