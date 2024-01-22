import React from 'react';
import { Link } from 'react-router-dom';
import icone from '../imgs/icone.png';
import './nav.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-1000">
      <Link to="/">
        <img className="navbar-logo" src={icone} width="60" height="60" alt="Logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ml-sm-3">
            <Link className="nav-link" to="/cardapio">
              Cardápio
            </Link>
          </li>
          <li className="nav-item ml-sm-3">
            <Link className="nav-link" to="/empresa">
              Empresa
            </Link>
          </li>
          <li className="nav-item ml-sm-3">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ProductList">
              Gerenciar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
