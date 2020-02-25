import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {

  return (

    < Container >
      <div>
        <div>
          <Link to="/">
            <img src={logo} alt="FastFeet" />
          </Link>
        </div>
        <div>
          <ul className="menu">
            <li>
              <NavLink to="/encomendas" activeClassName='active' >ENCOMENDAS</NavLink >
            </li>
            <li>
              <NavLink to="/entregadores" activeClassName='active'>ENTREGADORES</NavLink >
            </li>
            <li>
              <NavLink to="/destinatarios" activeClassName='active'>DESTINATÁRIOS</NavLink>
            </li>
            <li>
              <NavLink to="/problemas" activeClassName='active'>PROBLEMAS</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span>Admin FastFeet</span>
        <button type="button">Sair do sistema</button>
      </div>
    </Container >
  );
}
