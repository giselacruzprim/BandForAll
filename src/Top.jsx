import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Form from "react-bootstrap/Form";

import { Translate } from "react-localize-redux";
import TriaIdioma, { Triaidioma } from "./TriaIdioma";

import { APIURL } from "./Datos.js";
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
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      contrasenya: ""
    };

    this.cerrarUsuario = this.cerrarUsuario.bind(this);
    this.logIn = this.logIn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  logIn(event) {
    event.preventDefault();
    let url =
      APIURL +
      `bandforall_musico/?_where=(email,eq,${this.state.email})~and(contrasenya,eq,${this.state.contrasenya})`;
    console.log("URL PETICION ", url);

    fetch(url)
      .then(datos => datos.json())
      .then(datos => {
        let usuarioRecibido = datos[0];

        this.props.registraUsuario(usuarioRecibido.id);
      })

      .catch(err => console.log(err));

    this.setState({ email: "", contrasenya: "" });
  }

  cerrarUsuario() {
    if (this.props.usuarioRegistrado !== "") {
      this.props.registraUsuario("");
    }
  }

  render() {
    let dropdownUsuario = <></>;

    if (this.props.usuarioRegistrado) {
      dropdownUsuario = (
        <>
          <div class="dropdown">
            <div
              class="btn btn-secondary dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link
                class="dropdown-item"
                to={"/verPerfil/" + this.props.usuarioRegistrado}
              >
                Ver Perfil
              </Link>
              <Link onClick={this.cerrarUsuario} class="dropdown-item" to={"/"}>
                Cerrar sesión
              </Link>
            </div>
          </div>

          {/*  El boton de mensaje. */}

          <button className="vermensajes" outline color="primary">
            <Link to={"/mensajes"}>
              {" "}
              <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
            </Link>
          </button>
        </>
      );
    }

    return (
      <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light navegadorInicial navbar navbar-dark bg-dark fixed-top border-bottom">
          <Link className="logotipo" to="/inicio">
            <img className="logotipo" src={Logo} />
          </Link>

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

          {dropdownUsuario}

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                {this.props.usuarioRegistrado ? (
                  <></>
                ) : (
                  <Link className="registrate" to="/registro">
                    Regístrate
                  </Link>
                )}
              </li>

              <li class="nav-item active">
                <Link className="ayuda" to="/ayuda">
                  Ayuda
                </Link>
              </li>
            </ul>

          
          </div>

          {this.props.usuarioRegistrado ? (
            <></>
          ) : (
            <UncontrolledDropdown className="dropdown" setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link" caret>
                Iniciar sesión
              </DropdownToggle>

              <DropdownMenu className="menuinicio">
                <Form.Control
                  className="correo"
                  placeholder="Correo electrónico"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  name="email"
                />
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.contrasenya}
                  name="contrasenya"
                  className="correo"
                  placeholder="Contraseña"
                  type="password"
                />

                <Button
                  onClick={this.logIn}
                  className="aceptar"
                  color="primary"
                >
                  Aceptar
                </Button>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
        </nav>
      </>
    );
  }
}
export default Top;