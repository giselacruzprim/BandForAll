import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { APIURL } from "./Datos.js";
import { FormGroup, Input, Label } from "reactstrap";

class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentos: [],
      generos:[],      
      nombre: "",
      apellido: "",
      email: "",
      confirmaEmail: "",
      contrasenya: ""
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
      contrasenya: this.state.contrasenya
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

      if (check.checked) {
        nombreBanda.removeAttribute("disabled", "");
        numeroBanda.removeAttribute("disabled", "");
        instrumento1.removeAttribute("disabled","");
        instrumento2.removeAttribute("disabled","");
        instrumento3.removeAttribute("disabled","");
      } else{
        nombreBanda.setAttribute("disabled", "");
        numeroBanda.setAttribute("disabled", "");
        instrumento1.setAttribute("disabled","");
        instrumento2.setAttribute("disabled","");
        instrumento3.setAttribute("disabled","");
      }
    }

    return (
      <>
        <form className="container-fluid" onSubmit={this.creaUsuario}>
         
           
        </form>
      </>
    );
  }
}
export default Registro;
