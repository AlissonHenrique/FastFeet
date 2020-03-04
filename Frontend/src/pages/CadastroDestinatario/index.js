import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  HeaderBox,
  IconSave,
  BtnBack,
  IconBack,
  BtnAdd,
  ContainerBox,
} from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import Input from '../../components/Form/Input';
import { Form } from '@unform/web';
export default function CadastroDestinatario({ match }) {
  const [initial, setInitial] = useState({});
  useEffect(() => {
    async function load() {
      const { id } = match.params;
      const response = await api.get(`/recipient/${id}`);
      setInitial(response.data);
    }
    load();
  }, [match.params]);
  function handleSubmit(data) {
    console.log(data);
  }

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
            <BtnAdd>
              <IconSave /> Salvar
            </BtnAdd>
          </div>
        </HeaderBox>
        <ContainerBox>
          <Form initialData={initial} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome">
                Nome
                <br />
                <Input name="nome" />
              </label>
            </div>

            <div className="line-one">
              <label htmlFor="rua">
                Rua
                <br />
                <Input name="rua" />
              </label>

              <label htmlFor="numero">
                Número
                <br />
                <Input name="numero" />
              </label>

              <label htmlFor="Complemento">
                Complemento
                <br />
                <Input name="complementi" />
              </label>
            </div>

            <div className="line-two">
              <label htmlFor="cidade">
                Cidade
                <br />
                <Input name="cidade" />
              </label>

              <label htmlFor="estado">
                Estado
                <br />
                <Input name="estado" />
              </label>

              <label htmlFor="cep">
                CEP
                <br />
                <Input name="cep" />
              </label>
            </div>
          </Form>
        </ContainerBox>
      </Container>
    </>
  );
}
CadastroDestinatario.propTypes = {
  match: PropTypes.object.isRequired,
};
