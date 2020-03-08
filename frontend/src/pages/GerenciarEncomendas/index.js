import React, { useEffect, useState } from 'react';
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
  BoxModal,
  ModalBlack,
} from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import { format, parseISO } from 'date-fns';
export default function GerenciarEncomendas() {
  const [menu, setMenu] = useState('none');
  const [list, setList] = useState([]);
  const [modal, setModal] = useState();
  useEffect(() => {
    async function load() {
      const response = await api.get('order');
      const data = await response.data.map(m => ({
        ...m,
        formatEnd: format(parseISO(m.end_date), 'dd/MM/yyyy'),
        formatStart: format(parseISO(m.start_date), 'dd/MM/yyyy'),
      }));
      return setList(data);
    }
    load();
  }, [list]);
  function handleOpenMenu() {
    setMenu('show');
  }
  function handleCloseMenu() {
    setMenu('');
  }
  function handleModal() {
    setModal('show');
  }
  function handleCloseModal() {
    setModal('');
  }
  // prettier-ignore
  return (
    <>
      <ModalBlack state={modal} onClick={handleCloseModal} />
      <Header />
      <Container>
        <h1>Gerenciando encomendas</h1>
        <HeaderBox>
          <input type="text" placeholder="Buscar por encomendas" />
          <div>
            <Link to="/cadencomenda">
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
        {list.map(lt => (
          <Table key={lt.id}>
            <div className="colum-01">#{lt.id}</div>
            <div className="colum-02">{lt.destinatario.nome}</div>
            <div className="colum-03">
              <img
                src={
                  lt.entregador.avatar_id ||
                  'https://api.adorable.io/avatars/50/abott@adorable.png'
                }
              />

              {lt.entregador.name}
            </div>
            <div className="colum-04">{lt.destinatario.estado}</div>
            <div className="colum-05">{lt.destinatario.cidade}</div>
            <div className="colum-06">ENTREGUE</div>
            <div
              className="colum-07"
              onMouseOver={handleOpenMenu}
              onMouseOut={handleCloseMenu}
            >
              <MdMoreHoriz color="#C6C6C6" size={20} />
              <Menu state={menu}>
                <button type="button" onClick={handleModal}>
                  <MdRemoveRedEye color="#8E5BE8" size={20} />
                  <p> Visualizar</p>
                </button>
                <Link to={`/cadencomendaedit/${lt.id}/edit`}>
                  <MdCreate color="#4D85EE" size={20} />
                  <p> Editar</p>
                </Link>
                <button type="button">
                  <MdDeleteForever color="#DE3B3B" size={20} /> <p> Excluir</p>
                </button>
              </Menu>
            </div>
            <BoxModal state={modal}>
              <h1>Informações da encomenda</h1>
              <p>
                {lt.destinatario.rua},{lt.destinatario.numero}
                <br />
                {lt.destinatario.cidade} - {lt.destinatario.estado}
                <br />
                {lt.destinatario.cep}
              </p>
              <hr /><br />
              <h1>Datas</h1>
              <p><strong>Retirada: </strong> {lt.formatStart}</p>
              <p><strong>Entrega: </strong> {lt.formatEnd}</p>
              <hr /><br />
              <h1>Assinatura do destinatário</h1>
              <br />
              {lt.signature_id}
            </BoxModal>
          </Table>
        ))}
      </Container>
    </>
  );
}
