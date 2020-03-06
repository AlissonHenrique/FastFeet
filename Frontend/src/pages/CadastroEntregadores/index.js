import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';
import imgPhoto from '../../assets/icon-photo.svg';
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
} from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import Input from '../../components/Form/Input';

export default function CadastroEntregadores({ match }) {
  const [initial, setInitial] = useState({});

  async function handleSubmit(data) {
    if (match.params.id) {
      const { id } = match.params;
      await api.put(`/delivere/${id}`, data);
      history.push('/entregadores');
    } else {
      await api.post('/delivere', data);
      history.push('/entregadores');
    }
  }

  useEffect(() => {
    async function loadData() {
      const { id } = match.params;
      const response = await api.get(`/delivere/${id}/deliveres`);
      setInitial(response.data);
    }
    loadData();
  }, [match.params]);

  async function handleSubmit(data) {
    if (match.params.id) {
      const { id } = match.params;
      await api.put(`/delivere/${id}`, data);
      history.push('/entregadores');
    } else {
      await api.post('/delivere', data);
      history.push('/entregadores');
    }
  }

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
                <img src={imgPhoto} alt="Avatar" />
                {/* <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  data-file={file}
                  onChange={handleChange}
                  ref={ref}
                /> */}
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
