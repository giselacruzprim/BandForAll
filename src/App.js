import React from "react";
import "./tipo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Top from "./Top.jsx";
import FranjaFinal from "./FranjaFinal.jsx";
import Presentacion from "./Presentacion.jsx";
import Ayuda from "./Ayuda.jsx";
import Registro from "./Registro.jsx";
import PagTarjetas from "./PagTarjetas.jsx";
import PagTarjetasBanda from "./PagTarjetasBanda.jsx";
import PerfilUsuario from "./PerfilUsuario.jsx";
import "./estilos.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioRegistrado: ""
    };
    this.registraUsuario = this.registraUsuario.bind(this);
  }

  registraUsuario(nombre) {
    this.setState({ usuarioRegistrado: nombre });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Top usuarioRegistrado={this.state.usuarioRegistrado} />

          <Switch>
            <Route exact path="/" component={Presentacion} />
            <Route
              path="/registro"
              render={() => <Registro registraUsuario={this.registraUsuario} />}
            />
            <Route path="/ayuda" component={Ayuda} />
            <Route path="/inicio" component={Presentacion} />
            <Route path="/pagTarjetas" component={PagTarjetas} />
            <Route path="/pagTarjetasBanda" component={PagTarjetasBanda} />
            <Route path="/verPerfil" component={PerfilUsuario} />
          </Switch>

          <FranjaFinal />
        </BrowserRouter>
      </>
    );
  }
}
export default App;
