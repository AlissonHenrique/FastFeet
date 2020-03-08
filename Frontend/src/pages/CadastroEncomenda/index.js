import React, { useEffect, useState } from 'react';
import {
  Container,
  HeaderBox,
  IconSave,
  BtnBack,
  IconBack,
  BtnAdd,
  ContainerBox,
  Select,
} from './styles';
import api from '../../services/api';
import history from '../../services/history';
import Header from '../../components/Header';
import { Form } from '@unform/web';
import Input from '../../components/Form/Input';

export default function CadastroEncomenda({ match }) {
  const [destinatario, setDestinatario] = useState([]);
  const [entregador, setEntregador] = useState([]);
  const [destselect, setDestSelect] = useState([]);
  const [entselect, setEntSelect] = useState([]);
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    async function loadEdit() {
      const { id } = match.params;
      const response = await api.get(`/order/${id}`);
      const responseEnt = await api.get(`/recipient/${id}`);
      const responseDest = await api.get(`delivere/${id}/deliveres`);
      const responseEntLabel = {
        label: responseEnt.data.nome,
        value: responseEnt.data.id,
      };
      const responseDestLabel = {
        label: responseDest.data.name,
        value: responseDest.data.id,
      };
      setDestSelect(responseDestLabel);
      setEntSelect(responseEntLabel);
      setInitial(response.data);
    }

    async function loadDestinatarios() {
      const res = await api.get('recipient');
      const dataMap = await res.data.map(st => ({
        label: st.nome,
        value: st.id,
      }));
      setDestinatario(dataMap);
    }
    async function loadEntregador() {
      const res = await api.get('delivere');
      const dataMap = await res.data.map(st => ({
        label: st.name,
        value: st.id,
      }));
      setEntregador(dataMap);
    }
    loadDestinatarios();
    loadEntregador();
    loadEdit();
  }, []);

  async function handleSubmit(data) {
    const montData = {
      product: data.product,
      recipient_id: destselect.value,
      deliveryman_id: entselect.value,
    };
    if (match.params.id) {
      const { id } = match.params;
      await api.put(`/order/${id}`, montData);
      history.push('/encomendas');
    } else {
      await api.post('/order', montData);
      history.push('/encomendas');
    }
  }

  function handleDest(opt) {
    setDestSelect(opt);
  }
  function handleEnt(opt) {
    setEntSelect(opt);
  }

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit} initialData={initial}>
          <HeaderBox>
            <h1>Cadastrar encomendas</h1>
            <div>
              <BtnBack to="/encomendas">
                <IconBack /> Voltar
              </BtnBack>
              <BtnAdd type="submit">
                <IconSave /> Salvar
              </BtnAdd>
            </div>
          </HeaderBox>
          <ContainerBox>
            <div className="line-one">
              <label htmlFor="destinatário">
                Destinatário
                <br />
                <Select
                  onChange={opt => handleDest(opt)}
                  defaultOptions={destinatario}
                  name="destinatario"
                  value={destselect}
                />
              </label>

              <label htmlFor="entregador">
                Entregador
                <br />
                <Select
                  onChange={opt => handleEnt(opt)}
                  defaultOptions={entregador}
                  name="entregador"
                  value={entselect}
                />
              </label>
            </div>
            <div>
              <label htmlFor="nome">
                Nome do produto
                <br />
                <Input type="text" name="product" />
              </label>
            </div>
          </ContainerBox>
        </Form>
      </Container>
    </>
  );
}
