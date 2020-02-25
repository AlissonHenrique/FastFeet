import React from 'react';

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
} from './styles';
import Header from '../../components/Header';

export default function ProblemasEntrega() {
  return (
    <>
      <Header />
      <Container>
        <h1>Problemas na entrega</h1>

        <HeaderTable>
          <div className="colum-01">Encomenda</div>
          <div className="colum-02">Problema</div>

          <div className="colum-07">Ações</div>
        </HeaderTable>
        <Table>
          <div className="colum-01">#01</div>
          <div className="colum-02">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in mauris et felis eleifend elementum vel quis lectus…</div>
          <div className="colum-07">
            <MdMoreHoriz color="#C6C6C6" size={20} />
            <Menu>

              <div>
                <MdRemoveRedEye color="#4D85EE" size={20} />
                <p> Visualizar</p>
              </div>
              <div>
                <MdDeleteForever color="#DE3B3B" size={20} /> <p> Cancelar encomenda</p>
              </div>
            </Menu>
          </div>
        </Table>
      </Container>
    </>
  );
}
