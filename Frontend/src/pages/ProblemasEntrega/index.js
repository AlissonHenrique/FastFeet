import React, { useState } from 'react';

import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdDeleteForever,
} from 'react-icons/md';
import {
  Container,
  HeaderTable,
  Table,
  Menu,
  ModalBlack,
  BoxModal
} from './styles';
import Header from '../../components/Header';

export default function ProblemasEntrega() {

  const [modal, setModal] = useState();
  const [menu, setMenu] = useState('none');



  function handleOpenMenu() {
    setMenu('show');
  }
  function handleCloseMenu() {
    setMenu('');
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
      <BoxModal state={modal}>
        <h1>VISUALIZAR PROBLEMA</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mauris et felis eleifend elementum vel quis lectus. Vivamus dapibus nisi augue, vitae ultrices ligula elementum at. Proin ut metus in mi tincidunt vestibulum a a felis. Aenean dictum libero eu urna tristique vestibulum. Fusce feugiat justo et augue facilisis, sit amet ornare eros consequat. Suspendisse semper risus feugiat nisl commodo, sed mollis neque auctor. Nullam eu fringilla lectus. Phasellus sed sapien sed turpis imperdiet maximus. Aenean ante nulla, bibendum non facilisis at, facilisis eget ex. In ut quam et tellus aliquet tincidunt.</p>

      </BoxModal>

      <Header />
      <Container >
        <h1>Problemas na entrega</h1>

        <HeaderTable >
          <div className="colum-01">Encomenda</div>
          <div className="colum-02">Problema</div>

          <div className="colum-07">Ações</div>
        </HeaderTable>
        <Table  >
          <div className="colum-01">#01</div>
          <div className="colum-02">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mauris et felis eleifend elementum vel quis lectus…</div>
          <div className="colum-07" onMouseOver={handleOpenMenu} onMouseOut={handleCloseMenu} >
            <MdMoreHoriz color="#C6C6C6" size={20} />
            <Menu state={menu}>
              <button type="button" onClick={handleModal}>
                <MdRemoveRedEye color="#4D85EE" size={20} />
                <p> Visualizar</p>
              </button>
              <button type="button">
                <MdDeleteForever color="#DE3B3B" size={20} /> <p> Cancelar encomenda</p>
              </button>
            </Menu>
          </div>
        </Table>
      </Container>
    </>
  );
}
