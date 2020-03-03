import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
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
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/encomendas" component={GerenciarEncomendas} isPrivate />
        <Route
          path="/entregadores"
          component={GerenciarEntregadores}
          isPrivate
        />
        <Route
          path="/destinatarios"
          component={GerenciarDestinatarios}
          isPrivate
        />
        <Route path="/problemas" component={ProblemasEntrega} isPrivate />
        <Route
          path="/cadastroentregadores"
          component={CadastroEntregadores}
          isPrivate
        />
        <Route
          path="/cadastroentregadores/:id/edit"
          component={CadastroEntregadores}
          isPrivate
        />

        <Route
          path="/cadastrodestinatarios/:id/edit"
          component={CadastroDestinatario}
          isPrivate
        />
        <Route
          path="/cadastroencomenda"
          component={CadastroEncomenda}
          isPrivate
        />
        <Route
          path="/cadastroencomenda/:id/edit"
          component={CadastroEncomenda}
          isPrivate
        />
      </Switch>
    </BrowserRouter>
  );
}
