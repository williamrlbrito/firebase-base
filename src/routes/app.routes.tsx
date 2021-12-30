import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import Home from '../pages/Home';
import Dashboard from '../pages/financial/Dashboard';
import Accounts from '../pages/financial/Accounts';
import Categories from '../pages/financial/Categories';
import CostCenters from '../pages/financial/CostCenters';
import SourceDocuments from '../pages/financial/SourceDocuments';
import BillsToPay from '../pages/financial/BillsToPay';
import BillsToReceive from '../pages/financial/BillsToReceive';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/financial/dashboard" component={Dashboard} />
    <Route path="/financial/accounts" exact component={Accounts} />
    <Route path="/financial/categories" exact component={Categories} />
    <Route path="/financial/costcenters" exact component={CostCenters} />
    <Route
      path="/financial/sourcedocuments"
      exact
      component={SourceDocuments}
    />
    <Route path="/financial/billstopay" exact component={BillsToPay} />
    <Route path="/financial/billstoreceive" exact component={BillsToReceive} />
  </Switch>
);

export default AppRoutes;
