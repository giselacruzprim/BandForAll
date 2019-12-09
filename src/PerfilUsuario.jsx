import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Button } from "reactstrap";
import { APIURL} from "./Datos.js";
import FotoPerfil from "./fotos/descarga.png";

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
        <div className="container-fluid">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 usuario">
            <img src={FotoPerfil} className="card-img-top fotop" alt="banda"/>
            <h1 className="nombreUsuario">{this.state.usuarioPerfil.nombre} {this.state.usuarioPerfil.apellido}</h1>
              <div className="row">
                <div className="col-5"></div>

                <div className="col-7"></div>
              </div>
              <hr className="filete"/>
              <h5 className="items">• Localización: {this.state.usuarioPerfil.localizacion}</h5>
              <hr/>
              <h5 className="items">• Edad: {this.state.usuarioPerfil.edad}</h5>
              <hr/>
              <h5 className="items">• Instrumento 1: {this.state.usuarioPerfil.instrumento1}</h5> <h5 className="items">○ Nivel: {this.state.usuarioPerfil.nivel_instrumento1}</h5>
              <h5 className="items">• Instrumento 2: {this.state.usuarioPerfil.instrumento2}</h5> <h5 className="items">○ Nivel: {this.state.usuarioPerfil.nivel_instrumento2}</h5>
              <hr/>
              <h5 className="items">• Géneros: {this.state.usuarioPerfil.genero_musico1}</h5><h5 className="items">{this.state.usuarioPerfil.genero_musico2}</h5>
              <hr/>
              <h5 className="items">• Datos Adicionales: {this.state.usuarioPerfil.textoMusico}</h5>
              
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </>
    );
  }
}
export default perfilUsuario;