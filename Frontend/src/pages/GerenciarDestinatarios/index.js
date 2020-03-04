import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { MdMoreHoriz, MdCreate, MdDeleteForever } from 'react-icons/md';
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
  const [menu, setMenu] = useState('none');
  const [list, setList] = useState([]);
  useEffect(() => {
    async function load() {
      const response = await api.get('recipient');
      return setList(response.data);
    }
    load();
  }, [list]);

  function handleOpenMenu() {
    setMenu('show');
  }
  function handleCloseMenu() {
    setMenu('');
  }
  function handleDelete(id) {
    try {
      api.delete(`/recipient/${id}`);
    } catch (err) {
      console.tron.log(`${err}erro`);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Gerenciando destinatarios</h1>
        <HeaderBox>
          <input type="text" placeholder="Buscar por encomendas" />
          <div>
            <Link to="/caddestinatarios">
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
        {list.map(lt => (
          <Table key={lt.id}>
            <div className="colum-01">#{lt.id}</div>
            <div className="colum-02">{lt.nome}</div>
            <div className="colum-03">
              {lt.rua}, {lt.numero}, {lt.cidade} - {lt.estado}
            </div>

            <div
              className="colum-07"
              onMouseOver={handleOpenMenu}
              onMouseOut={handleCloseMenu}
            >
              <MdMoreHoriz color="#C6C6C6" size={20} />
              <Menu state={menu}>
                <Link to={`/caddestinatarios/${lt.id}/edit`}>
                  <MdCreate color="#4D85EE" size={20} />
                  <p> Editar</p>
                </Link>
                <button type="button" onClick={() => handleDelete(lt.id)}>
                  <MdDeleteForever color="#DE3B3B" size={20} /> <p> Excluir</p>
                </button>
              </Menu>
            </div>
          </Table>
        ))}
      </Container>
    </>
  );
}
