import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import GerenciarEncomendas from '../pages/GerenciarEncomendas';
import GerenciarEntregadores from '../pages/GerenciarEntregadores';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/encomenda" component={GerenciarEncomendas} />
      <Route path="/entregadores" component={GerenciarEntregadores} />
    </Switch>
  );
}
