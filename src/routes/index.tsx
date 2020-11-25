import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Repos from '../pages/Repos';
import Followers from '../pages/Followers';
import Following from '../pages/Following';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/repos" component={Repos} />
    <Route path="/followers" component={Followers} />
    <Route path="/following" component={Following} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
