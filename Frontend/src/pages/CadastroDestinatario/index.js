import React from 'react'
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

export default function CadastroDestinatario() {
  return (
    <>
      <Header />
      <Container>
        <HeaderBox>
          <h1>Cadastro de destinatarios</h1>
          <div>
            <BtnBack to="/destinatarios">
              <IconBack /> Voltar
            </BtnBack>
            <BtnAdd >
              <IconSave /> Salvar
            </BtnAdd>
          </div>
        </HeaderBox>
        <ContainerBox>
          <div>
            <label htmlFor="nome" >Nome<br />
              <input type="text" />
            </label>
          </div>

          <div className="line-one">
            <label htmlFor="rua" >Rua<br />
              <input type="text" />
            </label>

            <label htmlFor="numero" >Número<br />
              <input type="text" />
            </label>

            <label htmlFor="Complemento" >Complemento<br />
              <input type="text" />
            </label>
          </div>

          <div className="line-two">
            <label htmlFor="cidade" >Cidade<br />
              <input type="text" />
            </label>

            <label htmlFor="estado" >Estado<br />
              <input type="text" />
            </label>

            <label htmlFor="cep" >CEP<br />
              <input type="text" />
            </label>
          </div>

        </ContainerBox>


      </Container>
    </>
  );
}
