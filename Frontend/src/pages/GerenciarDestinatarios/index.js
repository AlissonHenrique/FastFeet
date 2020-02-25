import React from 'react';
import { Link } from 'react-router-dom';

import {
  MdMoreHoriz,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';
import {
  Container,
  HeaderBox,
  IconAdd,
  HeaderTable,
  Table,
  Menu,
} from './styles';
import Header from '../../components/Header';

export default function GerenciarDestinatarios() {
  return (
    <>
      <Header />
      <Container>
        <h1>Gerenciando destinatarios</h1>
        <HeaderBox>
          <input type="text" placeholder="Buscar por encomendas" />
          <div>
            <Link to="/registerstudent">
              <IconAdd /> Cadastrar
            </Link>
          </div>
        </HeaderBox>
        <HeaderTable>
          <div className="colum-01">ID</div>
          <div className="colum-02">Nome</div>
          <div className="colum-03">Endereço</div>

          <div className="colum-07">Ações</div>
        </HeaderTable>
        <Table>
          <div className="colum-01">#01</div>
          <div className="colum-02">Ludwig van Beethoven</div>
          <div className="colum-03">Rua Beethoven, 1729, Diadema - São Paulo</div>

          <div className="colum-07">
            <MdMoreHoriz color="#C6C6C6" size={20} />
            <Menu>

              <div>
                <MdCreate color="#4D85EE" size={20} />
                <p> Editar</p>
              </div>
              <div>
                <MdDeleteForever color="#DE3B3B" size={20} /> <p> Excluir</p>
              </div>
            </Menu>
          </div>
        </Table>
      </Container>
    </>
  );
}
