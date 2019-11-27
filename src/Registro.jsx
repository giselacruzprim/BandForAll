import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { APIURL } from "./Datos.js";
import { FormGroup, Input, Label } from "reactstrap";

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
      nivel1: "",
      nivel2: "",
      nomBanda: "",
      numBanda: "",
      instrumentoBanda1: "",
      instrumentoBanda2: "",
      textoBanda: "",
      fotoMusico: "",
      textoMusico: "",
      datosAdicionales:"",
      localidadBanda:"",
      generoBanda:"",
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

    let prod = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email,
      // confirmaEmail: this.state.confirmaEmail,
      contrasenya: this.state.contrasenya,
      instrumento1: this.state.instrumento1,
      instrumento2: this.state.instrumento2,
      nivel1: this.state.nivel1,
      nivel2: this.state.nivel2,
      nomBanda: this.state.nomBanda,
      numBanda: this.state.numBanda,
      textoBanda: this.state.textoBanda,
      localidad: this.state.localidad,
      localidadBanda: this.state.localidadBanda,
      generoBanda: this.state.generoBanda,
      datosAdicionales: this.state.datosAdicionales,

    };

    fetch(APIURL + "bandforall_musico", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(prod)
    })
      .then(data => data.json())
      .then(data => console.log(data))
      .then(() => this.setState({ volver: true }))
      .catch(err => console.log(err));
  }

  render() {
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

    function deshabilitarBanda() {
      let nombreBanda = document.getElementById("nomBanda");
      let numeroBanda = document.getElementById("numBanda");
      let instrumento1 = document.getElementById("instBanda1");
      let instrumento2 = document.getElementById("instBanda2");
      let instrumento3 = document.getElementById("instBanda3");
      let check = document.getElementById("checkboxBanda");
      let localidadBanda = document.getElementById("localidadBanda");
      let generoBanda = document.getElementById("generoBanda");
      let datosAdicionales = document.getElementById("datosAdicionales");

      if (check.checked) {
        nombreBanda.removeAttribute("disabled", "");
        numeroBanda.removeAttribute("disabled", "");
        instrumento1.removeAttribute("disabled", "");
        instrumento2.removeAttribute("disabled", "");
        instrumento3.removeAttribute("disabled", "");
        instrumento3.removeAttribute("disabled", "");
        localidadBanda.removeAttribute("disabled", "");
        generoBanda.removeAttribute("disabled", "");
        datosAdicionales.removeAttribute("disabled", "");

      } else {
        nombreBanda.setAttribute("disabled", "");
        numeroBanda.setAttribute("disabled", "");
        instrumento1.setAttribute("disabled", "");
        instrumento2.setAttribute("disabled", "");
        instrumento3.setAttribute("disabled", "");
        localidadBanda.setAttribute("disabled", "");
        generoBanda.setAttribute("disabled", "");
        datosAdicionales.setAttribute("disabled", "");
      }
    }

    return (
      <>
        <form className="container-fluid" onSubmit={this.creaUsuario}>
          <div className="row">
            <div className="col-5"></div>
            <div className="col-7">
              <h4>Datos usuario</h4>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <input
                      onChange={this.handleInputChange}
                      value={this.state.nombre}
                      name="nombre"
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder="Nombre"
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
                      id="exampleFormControlInput1"
                      placeholder="Apellidos"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.email}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.confirmaEmail}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Confirma email"
                    name="confirmaEmail"
                  />
                </div>
                <div className="form-group">
                  <div className="col">
                    <div className="row">
                      <input
                        onChange={this.handleInputChange}
                        value={this.state.contrasenya}
                        type="password"
                        className="form-control password"
                        id="exampleFormControlInput1"
                        placeholder="Contraseña"
                        name="contrasenya"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="col-7">
                  <input
                    onChange={this.handleInputChange}
                    value={this.state.localidad}
                    name="localidad"
                    className="form-control "
                    id="exampleFormControlInput1"
                    placeholder="Localidad"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h5>¿Qué instrumentos tocas?</h5>
                  <div className="row">
                    <div className="col-7">
                      <div className="form-group">
                        <select
                          className="form-control"
                          onChange={this.handleInputChange}
                          value={this.state.instrumento1}
                          name="instrumento1"
                        >
                          <option>Instrumento 1</option>
                          {filtrosInstrumentos}
                        </select>
                        <select
                          className="form-control"
                          onChange={this.handleInputChange}
                          value={this.state.instrumento2}
                          name="instrumento2"
                        >
                          <option>Instrumento 2</option>
                          {filtrosInstrumentos}
                        </select>
                      </div>
                    </div>
                    <div className="col-5">
                      <select
                        className="form-control"
                        onChange={this.handleInputChange}
                        value={this.state.nivel1}
                        name="nivel1"
                      >
                        <option>Nivel</option>
                        <option>Principiante</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                      </select>
                      <select
                        className="form-control"
                        onChange={this.handleInputChange}
                        value={this.state.nivel2}
                        name="nivel2"
                      >
                        <option>Nivel</option>
                        <option>Principiante</option>
                        <option>Intermedio</option>
                        <option>Avanzado</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <h5>¿Qué géneros tocas?</h5>
                    <select
                      className="form-control"
                      onChange={this.handleInputChange}
                      value={this.state.genero1}
                      name="genero1"
                    >
                      <option disabled selected>
                        Género
                      </option>
                      {filtrosGenero}
                    </select>
                    <select
                      className="form-control"
                      onChange={this.handleInputChange}
                      value={this.state.genero2}
                      name="genero2"
                    >
                      <option>Género</option>
                      {filtrosGenero}
                    </select>
                    <div className="form-group">
                      <h5 for="exampleFormControlFile1">Adjunta tu foto</h5>
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
                      <h5 for="exampleFormControlTextarea1">
                        Datos adicionales
                      </h5>
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
                </div>
                <div className="col">
                  <FormGroup check>
                    <Input
                      type="checkbox"
                      onClick={deshabilitarBanda}
                      name="check"
                      id="checkboxBanda"
                    />
                    <h5 for="exampleCheck" check>
                      ¿Tienes banda? Anúnciate!
                    </h5>
                  </FormGroup>

                  <div className="form-group">
                    <input
                      disabled
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
                    <h5>Número de miembros</h5>
                    <select
                      onChange={this.handleInputChange}
                      value={this.state.numBanda}
                      name="numBanda"
                      disabled
                      id="numBanda"
                      className="form-control"
                    >
                      <option selected disabled>
                        Número de miembros
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>5+</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <h5>¿Género de la banda?</h5>
                    <select
                      className="form-control"
                      onChange={this.handleInputChange}
                      value={this.state.generoBanda}
                      name="generoBanda"
                      disabled
                      id="generoBanda"
                    >
                      <option selected disabled>
                        Género
                      </option>
                      {filtrosGenero}
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="col">
                      <input
                        onChange={this.handleInputChange}
                        value={this.state.localidadBanda}
                        name="localidadBanda"
                        className="form-control "
                        disabled
                        id="localidadBanda"
                        placeholder="Localidad Banda"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <h5>¿Qué músicos buscas?</h5>
                    <select
                      onChange={this.handleInputChange}
                      value={this.state.instrumentoBanda1}
                      name="instrumentoBanda1"
                      id="instBanda1"
                      disabled
                      className="form-control"
                    >
                      <option>Instrumento</option>
                      {filtrosInstrumentos}
                    </select>
                    <select
                      onChange={this.handleInputChange}
                      value={this.state.instrumentoBanda2}
                      name="instrumentoBanda2"
                      disabled
                      id="instBanda2"
                      className="form-control"
                    >
                      <option>Instrumento</option>
                      {filtrosInstrumentos}
                    </select>

                    <div class="form-group">
                      <h5 for="exampleFormControlTextarea">
                        Datos adicionales
                      </h5>
                      <textarea
                        class="form-control"
                        disabled
                        id="datosAdicionales"
                        rows="3"
                        onChange={this.handleInputChange}
                        value={this.state.datosAdicionales}
                        name="datosAdicionales"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default Registro;
