import React, { useState, useEffect } from 'react';
import { MdMoreHoriz, MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';
import api from '../../services/api';
import {
  Container,
  HeaderTable,
  Table,
  Menu,
  ModalBlack,
  BoxModal,
} from './styles';
import Header from '../../components/Header';

export default function ProblemasEntrega() {
  const [hover, setHover] = useState(false);
  const [idmenu, setIdmenu] = useState('');
  const [modal, setModal] = useState();

  const [list, setList] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('problem');
      return setList(response.data);
    }
    load();
  }, [list]);

  function handleToggleHover(id) {
    setHover(!hover);
    setIdmenu(id);
  }
  function handleModal() {
    setModal('show');

    // const response = await api.get(`help/${id}/help-orders`);
    // setMd(response.data);
  }
  function handleCloseModal() {
    setModal('');
  }
  return (
    <>
      <ModalBlack state={modal} onClick={handleCloseModal} />
      <Header />
      <Container>
        <h1>Problemas na entrega</h1>

        <HeaderTable>
          <div className="colum-01">Encomenda</div>
          <div className="colum-02">Problema</div>

          <div className="colum-07">Ações</div>
        </HeaderTable>
        {list.map(lt => (
          <Table key={lt.id}>
            <div className="colum-01">#{lt.delivery_id}</div>
            <div className="colum-02">{lt.description}</div>
            <div
              className="colum-07"
              onMouseEnter={() => handleToggleHover(lt.id)}
              onMouseLeave={handleToggleHover}
            >
              <MdMoreHoriz color="#C6C6C6" size={20} />
              <Menu state={idmenu === lt.id ? 'block' : 'none'}>
                <button type="button" onClick={handleModal}>
                  <MdRemoveRedEye color="#4D85EE" size={20} />
                  <p> Visualizar</p>
                </button>
                <button type="button">
                  <MdDeleteForever color="#DE3B3B" size={20} />{' '}
                  <p> Cancelar encomenda</p>
                </button>
              </Menu>
            </div>
            <BoxModal state={modal}>
              <h1>VISUALIZAR PROBLEMA</h1>
              <p>{lt.description} </p>
            </BoxModal>
          </Table>
        ))}
      </Container>
    </>
  );
}
