import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { APIURL } from "./Datos.js";
import { FormGroup, Input, Label } from "reactstrap";
import { Redirect } from "react-router-dom";
import TriaIdioma, {Triaidioma} from "./TriaIdioma";
import {withLocalize, Translate} from 'react-localize-redux';
import  global from './global.json'; //= require('./globals.json');
const tradueix = (cosa, posicio) => global.global[cosa][posicio];
console.log(global);


class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentos: [],
      generos: [],
      nombre: "",
      apellido: "",
      email: "",
      confirmaEmail: "",
      contrasenya: "",
      instrumento1: "",
      instrumento2: "",
      nivel_instrumento1: "",
      nivel_instrumento2: "",
      genero_musico1: "",
      genero_musico2: "",
      nomBanda: "",
      numBanda: "",
      instrumentoBanda1: "",
      instrumentoBanda2: "",
      textoBanda: "",
      fotoMusico: "",
      textoMusico: "",
      localizacion: "",
      volver:false,
      bandaHabilitada: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.creaUsuario = this.creaUsuario.bind(this);
  }

  componentDidMount() {
    let url1 = APIURL + "bandforall_instrumentos?_size=100";
    fetch(url1)
      .then(datos => datos.json())
      .then(datosConvertidos1 => {
        this.setState({ instrumentos: datosConvertidos1 });
      })
      .catch(err => console.log(err));

    let url2 = APIURL + "bandforall_genero?_size=100";
    fetch(url2)
      .then(datos => datos.json())
      .then(datosConvertidos2 => {
        this.setState({ generos: datosConvertidos2 });
      })
      .catch(err => console.log(err));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  creaUsuario(event) {
    event.preventDefault();

    let datos = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email,
      // confirmaEmail: this.state.confirmaEmail,
      contrasenya: this.state.contrasenya,
      instrumento1: this.state.instrumento1,
      instrumento2: this.state.instrumento2,
      nivel_instrumento1: this.state.nivel_instrumento1,
      nivel_instrumento2: this.state.nivel_instrumento2,
      nomBanda: this.state.nomBanda,
      numBanda: this.state.numBanda,
      textoBanda: this.state.textoBanda,
      localizacion: this.state.localizacion,
      genero_musico1: this.state.genero_musico1,
      genero_musico2: this.state.genero_musico2,
      textoMusico: this.state.textoMusico,
      localizacion: this.state.localizacion,
      fotoMusico: this.state.fotoMusico,
    
      
    };

    fetch(APIURL + "bandforall_musico", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(datos)
    })
      .then(data => data.json())
      .then(data => {
        this.props.registraUsuario(data.insertId);
        console.log(data);
      })
      .then(() => this.setState({ volver: true }))
      .catch(err => console.log(err));
  
  }

 

  render() {

    if (this.state.volver===true){
      return <Redirect to="/" />;
    }

    if (
      this.state.instrumentos.length === 0 ||
      this.state.generos.length === 0
    ) {
      return <h1>cargando...</h1>;
    }
    let j = 1;
    let filtrosInstrumentos = this.state.instrumentos.map(el => (
      <option key={j++}>{el.nombre} </option>
    ));

    let k = 1;
    let filtrosGenero = this.state.generos.map(el => (
      <option key={k++}>{el.nombre} </option>
    ));

  
let curlang = this.props.languages.map(el => el.code).indexOf(this.props.activeLanguage.code);
    return (
      <>
    
        <form
          className="container-fluid formulario"
          onSubmit={this.creaUsuario}
        >
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <input
                      onChange={this.handleInputChange}
                      value={this.state.nombre}
                      name="nombre"
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder={tradueix("_nombre", curlang)}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <input
                      onChange={this.handleInputChange}
                      value={this.state.apellido}
                      name="apellido"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder={tradueix("_apellidos", curlang)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <input
                      onChange={this.handleInputChange}
                      value={this.state.email}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput3"
                      placeholder={tradueix("email", curlang)}
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={this.handleInputChange}
                      value={this.state.confirmaEmail}
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput4"
                      placeholder="Confirma email"
                      name={tradueix("confirma_email", curlang)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={this.handleInputChange}
                      value={this.state.contrasenya}
                      type="password"
                      className="form-control password"
                      id="exampleFormControlInput5"
                      placeholder={tradueix("contra", curlang)}
                      name="contrasenya"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  onChange={this.handleInputChange}
                  value={this.state.localizacion}
                  name="localizacion"
                  className="form-control "
                  id="exampleFormControlInput6"
                  placeholder={tradueix("localidad", curlang)}
                />
              </div>

              <div className="row">
                <div className="col">
                  <h5>  <Translate id="global.instrumentoToca" /></h5>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <select
                          className="form-control"
                          onChange={this.handleInputChange}
                          value={this.state.instrumento1}
                          name="instrumento1"
                        >
                          <option selected>Instrumento 1</option>
                          {filtrosInstrumentos}
                        </select>
                        <select
                          className="form-control"
                          onChange={this.handleInputChange}
                          value={this.state.instrumento2}
                          name="instrumento2"
                        >
                          <option selected>Instrumento 2</option>
                          {filtrosInstrumentos}
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <select
                        className="form-control"
                        onChange={this.handleInputChange}
                        value={this.state.nivel_instrumento1}
                        name="nivel_instrumento1"
                      >
                        <option>Nivel</option>
                        <option>Principiante</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                      </select>
                      <select
                        className="form-control"
                        onChange={this.handleInputChange}
                        value={this.state.nivel_instrumento2}
                        name="nivel_instrumento2"
                      >
                        <option>Nivel</option>
                        <option>Principiante</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                      </select>
                    </div>
                  </div>

                  <h5>  <Translate id="global.generoMusico" /></h5>
                  <select
                    className="form-control"
                    onChange={this.handleInputChange}
                    value={this.state.genero_musico1}
                    name="genero_musico1"
                  >
                    <option selected>
                      Género
                    </option>
                    {filtrosGenero}
                  </select>
                  <select
                    className="form-control"
                    onChange={this.handleInputChange}
                    value={this.state.genero_musico2}
                    name="genero_musico2"
                  >
                    <option selected>Género</option>
                    {filtrosGenero}
                  </select>
                  <div className="form-group">
                    <h5 htmlFor="exampleFormControlFile1">  <Translate id="global.foto" /></h5>
                    <input
                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                      onChange={this.handleInputChange}
                      value={this.state.fotoMusico}
                      name="fotoMusico"
                    />
                  </div>

                  <div className="form-group">
                    <h5 htmlFor="exampleFormControlTextarea1">  <Translate id="global.datos" /></h5>
                    <textarea
                      onChange={this.handleInputChange}
                      value={this.state.textoMusico}
                      name="textoMusico"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="col">
                  <FormGroup check>
                    <Input
                      type="checkbox"
                      onChange={this.handleInputChange}
                      value={this.state.bandaHabilitada}
                      name="bandaHabilitada"
                      id="checkboxBanda"
                    />
                    <h5 htmlFor="exampleCheck" check>
                    <Translate id="global.anunciate" />
                    </h5>
                  </FormGroup>
                  <div className="form-group">
                    <input
                      disabled={!this.state.bandaHabilitada}
                      type="text"
                      className="form-control"
                      id="nomBanda"
                      placeholder="Nombre banda"
                      onChange={this.handleInputChange}
                      value={this.state.nomBanda}
                      name="nomBanda"
                    />
                  </div>
                  <div className="form-group">
                    <h5>  <Translate id="global.miembros" /></h5>
                    <select
                      onChange={this.handleInputChange}
                      value={ this.state.numBanda}
                      name="numBanda"
                      disabled={!this.state.bandaHabilitada}
                      id="numBanda"
                      className="form-control"
                    >
                      <option selected>Número de miembros</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>6+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <h5>  <Translate id="global.search" /></h5>
                    <select
                      onChange={this.handleInputChange}
                      value={this.state.instrumentoBanda1}
                      name="instrumentoBanda1"
                      id="instBanda1"
                      disabled={!this.state.bandaHabilitada}
                      className="form-control"
                    >
                      <option>Instrumento</option>
                      {filtrosInstrumentos}
                    </select>
                    <select
                      onChange={this.handleInputChange}
                      value={this.state.instrumentoBanda2}
                      name="instrumentoBanda2"
                      id="instBanda2"
                      disabled={!this.state.bandaHabilitada}
                      className="form-control"
                    >
                      <option>Instrumento</option>
                      {filtrosInstrumentos}
                    </select>

                    <div className="form-group">
                      <h5 htmlFor="textoBanda">  <Translate id="global.datos" /></h5>
                      <textarea
                        className="form-control"
                        disabled={!this.state.bandaHabilitada}
                        id="textoBanda"
                        rows="3"
                        onChange={this.handleInputChange}
                        value={this.state.textoBanda}
                        name="textoBanda"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" value="Registrar" />
              <button type="submit" class="btn btn-dark">Dark</button>
            
              <input type="submit" value={tradueix("_apellidos", curlang)} />
              <br />
              <br />
              <br />
              <br />
              <br />

            </div>
            <div className="col"></div>
          </div>
     
        </form>
      </>
    );
  }
}
export default withLocalize(Registro);
