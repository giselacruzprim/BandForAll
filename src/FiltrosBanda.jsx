import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Input } from "reactstrap";
import { APIURL } from "./Datos.js";

class FiltrosBanda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miembros: [],
      generos: [],
      selectMiembros: "Miembros",
      selectGeneroBanda: "GéneroBanda"
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
    let url1 = APIURL + "bandforall_genero?_size=100";
    fetch(url1)
      .then(datos => datos.json())
      .then(datosConvertidos => {
        this.setState({ generos: datosConvertidos });
      })
      .catch(err => console.log(err));
  }

  cargaDatos() {
    this.props.cargaFiltroBanda(
      this.state.selectGeneroBanda
    );
  }

  render() {
    if (
      this.state.generos.length === 0
    ) {
      return <h1>cargando...</h1>;
    }
   

    let k = 1;
    let filtrosGeneros = this.state.generos.map(el => (
      <option key={k++}>{el.nombre} </option>
    ));

    return (
      <>
        <h4>Características de la banda</h4>
        <br></br>
        <FormGroup>
          <Input
            type="select"
            onChange={this.handleInputChange}
            name="selectGeneroBanda"
            id="exampleSelect2"
          >
            <option selected>Género</option>
            {filtrosGeneros}
          </Input>
        </FormGroup>
      </>
    );
  }
}
export default FiltrosBanda;
