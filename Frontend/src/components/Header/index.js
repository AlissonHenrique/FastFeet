import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <div>
        <div>
          <Link to="/">
            <img src={logo} alt="FastFeet" />
          </Link>
        </div>
        <div>
          <ul className="menu">
            <li>
              <Link to="/encomenda">ENCOMENDAS</Link>
            </li>
            <li>
              <Link to="/">ENTREGADORES</Link>
            </li>
            <li>
              <Link to="/">DESTINATÁRIOS</Link>
            </li>
            <li>
              <Link to="/">PROBLEMAS</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span>Admin FastFeet</span>
        <button type="button">Sair do sistema</button>
      </div>
    </Container>
  );
}
