import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Button } from "reactstrap";
import { APIURL} from "./Datos.js";


import { Translate} from 'react-localize-redux';

import TriaIdioma, {Triaidioma} from "./TriaIdioma";

class perfilUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioPerfil: []
    };
  }

  componentDidMount() {
    fetch(APIURL + `bandforall_musico/${this.props.obtenUsuarioRegistrado()}`)
      .then(data => data.json())
      .then(datos =>
        this.setState({
          usuarioPerfil: datos[0]
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container-fluid">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <Jumbotron fluid>
                <Container fluid>
                  <h5 className="lead">{this.state.usuarioPerfil.nombre} {this.state.usuarioPerfil.apellido}</h5>
                </Container>
              </Jumbotron>
              <div className="row">
                <div className="col-5"></div>

                <div className="col-7"></div>
              </div>
              <h5><Translate id="global.edad" /> {this.state.usuarioPerfil.edad}</h5>
              <h5><Translate id="global.instrumento1" />{this.state.usuarioPerfil.instrumento1}</h5> <h5>Nivel: {this.state.usuarioPerfil.nivel_instrumento1}</h5>
              <h5><Translate id="global.instrumento2" /> {this.state.usuarioPerfil.instrumento2}</h5> <h5>Nivel: {this.state.usuarioPerfil.nivel_instrumento2}</h5>
             
              <h5><Translate id="global.generos" /></h5>
              <h5> {this.state.usuarioPerfil.genero_musico1}</h5>
              <h5>{this.state.usuarioPerfil.genero_musico2}</h5>
              <h5><Translate id="global.localizacion" />: {this.state.usuarioPerfil.localizacion}</h5>
             
              

              <h5><Translate id="global.datos" /></h5>
              {this.state.usuarioPerfil.textoMusico}
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </>
    );
  }
}
export default perfilUsuario;
