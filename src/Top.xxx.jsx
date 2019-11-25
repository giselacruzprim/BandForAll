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
import "./top.css";

import Logo from "./logo-05.png";

class Top extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navegadorInicial navbar navbar-dark bg-dark">
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
          <i
            style={{ color: "white" }}
            className="fa fa-music logoProyect"
            aria-hidden="true"
          ></i>
          <Link to="/inicio">MúsicaApp</Link>

          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
             Regístrate
            </DropdownToggle>
            <DropdownMenu>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Entra tu email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button color="primary">Aceptar</Button>
            </DropdownMenu>
          </UncontrolledDropdown>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/registro">Regístrate</Link>
              </li>
              <li className="nav-item">
                <Link to="/ayuda">Ayuda</Link>
              </li>
            </ul>

            <Link to="/verPerfil">
            <div className="iconoPerfil">
              <img src="" alt=""/>
            </div>
            </Link>


            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar musico"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 btn btn-secondary"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </>
    );
  }
}
export default Top;
