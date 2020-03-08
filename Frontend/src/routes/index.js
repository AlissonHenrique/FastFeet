import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import GerenciarEncomendas from '../pages/GerenciarEncomendas';
import GerenciarEntregadores from '../pages/GerenciarEntregadores';
import GerenciarDestinatarios from '../pages/GerenciarDestinatarios';
import ProblemasEntrega from '../pages/ProblemasEntrega';
import CadastroEntregadores from '../pages/CadastroEntregadores';

import CadastroDestinatario from '../pages/CadastroDestinatario';
import CadastroEncomenda from '../pages/CadastroEncomenda';

import Dashboard from '../pages/Dashboard';
// prettier-ignore
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/encomendas" component={GerenciarEncomendas} isPrivate />
      <Route path="/entregadores" component={GerenciarEntregadores} isPrivate />
      <Route path="/destinatarios" component={GerenciarDestinatarios} isPrivate />
      <Route path="/problemas" component={ProblemasEntrega} isPrivate />
      <Route path="/cadentregadores" component={CadastroEntregadores} isPrivate />
      <Route path="/cadentregadoresedit/:id/edit" component={CadastroEntregadores} isPrivate />
      <Route path="/caddestinatarios" component={CadastroDestinatario} isPrivate />
      <Route path="/caddestinatariosedit/:id/edit" component={CadastroDestinatario} isPrivate />
      <Route path="/cadencomenda" component={CadastroEncomenda} isPrivate />
      <Route path="/cadencomendaedit/:id/edit" component={CadastroEncomenda} isPrivate />
    </Switch>
  );
}
