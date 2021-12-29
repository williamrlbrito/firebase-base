import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default AppRoutes;
