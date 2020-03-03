import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import imgPhoto from '../../assets/icon-photo.svg';
import {
  Container,
  HeaderBox,
  IconSave,
  BtnBack,
  IconBack,
  BtnAdd,
  ContainerBox,
  ContainerPhoto,
} from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import Input from '../../components/Form/Input';

export default function CadastroEntregadores({ match }) {

  const [initial, setInitial] = useState({});




  useEffect(() => {
    async function loadData() {
      const id = match.params.id;
      const response = await api.get(`/delivere/${id}/deliveres`);
      setInitial(response.data);
      console.log(response.data);
    }
    loadData();
    console.log(match);
  }, [match.params]);


  function handleSubmit(data) {
    console.log(data);
  }

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
            <BtnAdd>
              <IconSave /> Salvar
            </BtnAdd>
          </div>
        </HeaderBox>
        <ContainerBox>
          <Form onSubmit={handleSubmit}>
            <ContainerPhoto>
              <img src={imgPhoto} alt="Avatar" />
            </ContainerPhoto>
            <div>
              <label htmlFor="nome">
                Nome
                <br />
                <Input name="name" type="text" />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Email
                <br />
                <Input name="email" type="text" />
              </label>
            </div>
          </Form>
        </ContainerBox>
      </Container>
    </>
  );
}
CadastroEntregadores.propTypes = {
  match: PropTypes.object.isRequired,
};
