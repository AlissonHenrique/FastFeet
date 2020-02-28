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

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/encomendas" component={GerenciarEncomendas} />
      <Route path="/entregadores" component={GerenciarEntregadores} />
      <Route path="/destinatarios" component={GerenciarDestinatarios} />
      <Route path="/problemas" component={ProblemasEntrega} />
      <Route path="/cadastroentregadores" component={CadastroEntregadores} />
      <Route path="/cadastroentregadores/:id/edit" component={CadastroEntregadores} />

      <Route path="/cadastrodestinatarios/:id/edit" component={CadastroDestinatario} />
      <Route path="/cadastroencomenda" component={CadastroEncomenda} />
      <Route path="/cadastroencomenda/:id/edit" component={CadastroEncomenda} />
    </Switch>
  );
}
