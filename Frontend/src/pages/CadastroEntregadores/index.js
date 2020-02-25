import React from 'react';
import imgPhoto from '../../assets/icon-photo.svg'
import {
  Container,
  HeaderBox,
  IconSave,
  BtnBack,
  IconBack,
  BtnAdd,
  ContainerBox,
  ContainerPhoto

} from './styles';
import Header from '../../components/Header';

export default function CadastroEntregadores() {
  return (
    <>
      <Header />
      <Container>
        <HeaderBox>
          <h1>Gerenciando de entregadores</h1>
          <div>
            <BtnBack to="/entregadores">
              <IconBack /> Voltar
            </BtnBack>
            <BtnAdd >
              <IconSave /> Salvar
            </BtnAdd>
          </div>
        </HeaderBox>
        <ContainerBox>
          <ContainerPhoto>
            <img src={imgPhoto} alt="Avatar" />
          </ ContainerPhoto>
          <div>
            <label htmlFor="nome" >Nome<br />
              <input type="text" />
            </label>
          </div>
          <div>
            <label htmlFor="email" >Email<br />
              <input type="text" />
            </label>
          </div>
        </ContainerBox>


      </Container>
    </>
  );
}
