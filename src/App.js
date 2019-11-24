import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Top from "./Top.jsx";
import FranjaFinal from "./FranjaFinal.jsx";
import Presentacion from "./Presentacion.jsx";
import Ayuda from "./Ayuda.jsx";
import Registro from "./Registro.jsx";
import PagTarjetas from "./PagTarjetas.jsx";
import PerfilUsuario from "./PerfilUsuario.jsx"

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Top />

          <Switch>
            <Route exact path="/" component={Presentacion}   />
            <Route path="/registro" component={Registro} />
            <Route path="/ayuda" component={Ayuda} />
            <Route path="/inicio" component={Presentacion} />
            <Route path="/pagTarjetas" component={PagTarjetas} />
            <Route path="/verPerfil" component={PerfilUsuario} />
          </Switch>

          <FranjaFinal />
        </BrowserRouter>
      </>
    );
  }
}
export default App;
