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
import Header from '../../components/Header';

export default function CadastroEncomenda() {
  const [destinatario, setDestinatario] = useState([]);
  const [entregador, setEntregador] = useState([]);
  useEffect(() => {
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
  }, []);

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
                defaultOptions={destinatario}
                //onChange={opt => handleStudent(opt)}
              />
            </label>

            <label htmlFor="entregador">
              Entregador
              <br />
              <Select
                defaultOptions={entregador}
                //onChange={opt => handleStudent(opt)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="nome">
              Nome do produto
              <br />
              <input type="text" />
            </label>
          </div>
        </ContainerBox>
      </Container>
    </>
  );
}
