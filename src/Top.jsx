

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import Logo from "./logo-05.png";
import "./top.css";


class Top extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navegadorInicial navbar navbar-dark bg-dark fixed-top border-bottom">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="logotipo" to="/inicio"><img className="logotipo" src={Logo}/></Link>
          <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control buscador mr-sm-2" 
                type="search"
                placeholder="Busca por instrumento, género o localidad..."
                aria-label="Search"
              />
              

              
              <button
                className="btn btn-dark my-2 my-sm-0 btn btn-secondary"
                type="submit"
              >
                Buscar
              </button>
              </form>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="registrate" to="/registro">Regístrate</Link>
              </li>
              <li className="nav-item">
                <Link className="ayuda" to="/ayuda">Ayuda</Link>
              </li>
            </ul>
          </div>
          <UncontrolledDropdown className="dropdown" setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
              Iniciar sesión
            </DropdownToggle>


            <DropdownMenu className="menuinicio">
                <Form.Control  className="correo" placeholder="Correo electrónico" />
                <Form.Control  className="correo" placeholder="Contraseña" />
              <Button className="aceptar" color="primary">Aceptar</Button>
            </DropdownMenu>
          </UncontrolledDropdown>
        </nav>
      </>
    );
  }
}
export default Top;
