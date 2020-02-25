import React from 'react';
import {
  Container,
  HeaderBox,
  IconSave,
  BtnBack,
  IconBack,
  BtnAdd,
  ContainerBox,


} from './styles';
import Header from '../../components/Header';

export default function CadastroEncomenda() {
  return (
    <>
      <Header />
      <Container>
        <HeaderBox>
          <h1>Cadastrar encomendas</h1>
          <div>
            <BtnBack to="/encomendas">
              <IconBack /> Voltar
            </BtnBack>
            <BtnAdd >
              <IconSave /> Salvar
            </BtnAdd>
          </div>
        </HeaderBox>
        <ContainerBox>


          <div className="line-one">
            <label htmlFor="destinatário" >Destinatário<br />
              <input type="text" />
            </label>

            <label htmlFor="entregador" >Entregador<br />
              <input type="text" />
            </label>
          </div>
          <div>
            <label htmlFor="nome" >Nome do produto<br />
              <input type="text" />
            </label>
          </div>



        </ContainerBox>


      </Container>
    </>
  );
}
