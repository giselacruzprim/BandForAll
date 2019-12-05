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
import Missatges from "./Missatges.jsx";
import Mensaje from "./Mensaje.jsx";
import globalTranslations from "./global.json";
import {withLocalize, Translate} from 'react-localize-redux';
import { renderToStaticMarkup } from "react-dom/server";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioRegistrado: ""
    };
    this.registraUsuario = this.registraUsuario.bind(this);
    this.obtenUsuarioRegistrado = this.obtenUsuarioRegistrado.bind(this);

    this.props.initialize({
      languages: [
        { name: "Castellano", code: "es" },
        { name: "Català", code: "ca" },
        { name: "English", code: "en" },
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup, defaultLanguage: 'es' }
    });
  }
 
  

  registraUsuario(id) {
    this.setState({ usuarioRegistrado: id });
  }

  obtenUsuarioRegistrado() {
    return this.state.usuarioRegistrado; //({ usuarioRegistrado: id });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Top
            usuarioRegistrado={this.state.usuarioRegistrado}
            registraUsuario={this.registraUsuario}
          />

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
            <Route
              path="/verPerfil/:id"
              render={() => (
                <PerfilUsuario
                  obtenUsuarioRegistrado={this.obtenUsuarioRegistrado}
                />
              )}
            />
            <Route path="/mensajes" component={Missatges} />
            <Route path="/mensaje/:id" component={Mensaje} />
          </Switch>

          <FranjaFinal />
        </BrowserRouter>
      </>
    );
  }
}
export default withLocalize(App);

