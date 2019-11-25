import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Input } from "reactstrap";
import { APIURL } from "./Datos.js";

class FiltrosMusico extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      instrumentos: [],
      generos: [],
      selectInstrumento: "Instrumento",
      selectGenero: "Género",
      selectEdad: "Edad",
      selectNivel: "Nivel"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.cargaDatos = this.cargaDatos.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "select" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      this.cargaDatos
    );
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

  cargaDatos() {
    this.props.cargaFiltro(
      this.state.selectGenero,
      this.state.selectInstrumento,
      this.state.selectEdad
    );
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
    let filtrosGeneros = this.state.generos.map(el => (
      <option key={k++}>{el.nombre} </option>
    ));

    return (
      <>
        <h2>Filtros</h2>
        <FormGroup>
          <Input
            type="select"
            onChange={this.handleInputChange}
            name="selectInstrumento"
            id="exampleSelect1"
          >
            <option selected>Instrumento</option>
            {filtrosInstrumentos}
          </Input>
        </FormGroup>

        <FormGroup>
          <Input
            type="select"
            onChange={this.handleInputChange}
            name="selectGenero"
            id="exampleSelect2"
          >
            <option selected>Género</option>
            {filtrosGeneros}
          </Input>
        </FormGroup>

        <FormGroup>
          <Input
            type="select"
            onChange={this.handleInputChange}
            name="selectEdad"
            id="exampleSelect4"
          >
            <option selected>Edad</option>
            <option value="rango1">Menor de 20 años.</option>
            <option value="rango2">Entre 20 y 30 años.</option>
            <option value="rango3">Entre 30 y 40 años.</option>
            <option value="rango4">Más de 40 años.</option>
          </Input>
        </FormGroup>
      </>
    );
  }
}
export default FiltrosMusico;
