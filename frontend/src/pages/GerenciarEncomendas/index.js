import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  MdMoreHoriz,
  MdCreate,
  MdRemoveRedEye,
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

export default function GerenciarEncomendas() {
  const [menu, setMenu] = useState('none');



  function handleOpenMenu() {
    setMenu('show');
  }
  function handleCloseMenu() {
    setMenu('');
  }
  return (
    <>
      <Header />
      <Container>
        <h1>Gerenciando encomendas</h1>
        <HeaderBox>
          <input type="text" placeholder="Buscar por encomendas" />
          <div>
            <Link to="/cadastroencomenda">
              <IconAdd /> Cadastrar
            </Link>
          </div>
        </HeaderBox>
        <HeaderTable>
          <div className="colum-01">ID</div>
          <div className="colum-02">Destinatário</div>
          <div className="colum-03">Entregador</div>
          <div className="colum-04">Cidade</div>
          <div className="colum-05">Estado</div>
          <div className="colum-06">Status</div>
          <div className="colum-07">Ações</div>
        </HeaderTable>
        <Table>
          <div className="colum-01">#01</div>
          <div className="colum-02">Ludwig van Beethoven</div>
          <div className="colum-03">
            <div className="iconName">JD</div>John Doe
          </div>
          <div className="colum-04">Rio do Sul</div>
          <div className="colum-05">Santa Catarina</div>
          <div className="colum-06">ENTREGUE</div>
          <div className="colum-07" onMouseOver={handleOpenMenu} onFocus onMouseOut={handleCloseMenu} onBlur >
            <MdMoreHoriz color="#C6C6C6" size={20} />
            <Menu state={menu}>
              <button type="button">
                <MdRemoveRedEye color="#8E5BE8" size={20} /> <p> Visualizar</p>
              </button>
              <button type="button">
                <MdCreate color="#4D85EE" size={20} />
                <p> Editar</p>
              </button>
              <button type="button">
                <MdDeleteForever color="#DE3B3B" size={20} /> <p> Excluir</p>
              </button>
            </Menu>
          </div>
        </Table>
      </Container>
    </>
  );
}
