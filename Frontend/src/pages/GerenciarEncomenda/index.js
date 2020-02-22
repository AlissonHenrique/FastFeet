import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderBox, IconAdd, HeaderTable, Table } from './styles';
import Header from '../../components/Header';

export default function GerenciarEncomenda() {
  return (
    <>
      <Header />
      <Container>
        <h1>Gerenciando encomendas</h1>
        <HeaderBox>
          <input type="text" placeholder="Buscar por encomendas" />
          <div>
            <Link to="/registerstudent">
              <IconAdd /> Cadastrar
            </Link>
          </div>
        </HeaderBox>
        <HeaderTable>
          <div>ID</div>
          <div>Destinatário</div>
          <div>Entregador</div>
          <div>Cidade</div>
          <div>Estado</div>
          <div>Status</div>
          <div>Ações</div>
        </HeaderTable>
        <Table>
          <div>#01</div>
          <div>Ludwig van Beethoven</div>
          <div>
            <div className="iconName">JD</div>John Doe
          </div>
          <div>Rio do Sul</div>
          <div>Santa Catarina</div>
          <div>ENTREGUE</div>
          <div>...</div>
        </Table>
      </Container>
    </>
  );
}
