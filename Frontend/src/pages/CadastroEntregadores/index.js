/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';

import history from '../../services/history';
import {
  Container,
  HeaderBox,
  IconSave,
  BtnBack,
  IconBack,
  BtnAdd,
  ContainerBox,
  ContainerPhoto,
  FileInput,
} from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import Input from '../../components/Form/Input';

export default function CadastroEntregadores({ match }) {
  const [initial, setInitial] = useState({});

  async function handleSubmit(data) {
    // if (match.params.id) {
    //   const { id } = match.params;
    //   await api.put(`/delivere/${id}`, data);
    //   history.push('/entregadores');
    // } else {
    const dataFile = new FormData();

    dataFile.append('file', data.avatar);
    await api.post('/delivere', data);
    // history.push('/entregadores');
    //  }
    console.log(data);
  }

  useEffect(() => {
    async function loadData() {
      if (match.params.id) {
        const { id } = match.params;
        const response = await api.get(`/delivere/${id}/deliveres`);
        setInitial(response.data);
      }
    }
    loadData();
  }, [match.params]);

  return (
    <>
      <Header />
      <Container>
        <Form initialData={initial} onSubmit={handleSubmit}>
          <HeaderBox>
            <h1>Gerenciando de entregadores</h1>
            <div>
              <BtnBack to="/entregadores">
                <IconBack /> Voltar
              </BtnBack>
              <BtnAdd type="submit">
                <IconSave /> Salvar
              </BtnAdd>
            </div>
          </HeaderBox>
          <ContainerBox>
            <ContainerPhoto>
              <label>
                <FileInput name="avatar" type="file" />
              </label>
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
          </ContainerBox>
        </Form>
      </Container>
    </>
  );
}
CadastroEntregadores.propTypes = {
  match: PropTypes.object.isRequired,
};
