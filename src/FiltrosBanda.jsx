import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Input } from "reactstrap";
import { APIURL } from "./Datos.js";

class FiltrosMusico extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miembros: [],
      GeneroBanda: [],
      selectMiembros: "Miembros",
      selectGeneroBanda: "GéneroBanda",
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
    let url1 = APIURL + "bandforall_miembros?_size=100";
    fetch(url1)
      .then(datos => datos.json())
      .then(datosConvertidosBanda1  => {
        this.setState({ miembros: datosConvertidosBanda1 });
      })
      .catch(err => console.log(err));

    let url2 = APIURL + "bandforall_genero_musical_banda?_size=100";
    fetch(url2)
      .then(datos => datos.json())
      .then(datosConvertidosBanda2 => {
        this.setState({ generosBanda: datosConvertidosBanda2 });
      })
      .catch(err => console.log(err));
  }

  cargaDatos() {
    this.props.cargaFiltro(
      this.state.selectGeneroBanda,
      this.state.selectMiembros,
    );
  }

  render() {
    if (
      this.state.miembros.length === 0 ||
      this.state.generosBanda.length === 0
    ) {
      return <h1>cargando...</h1>;
    }
    let j = 1;
    let filtrosMiembros = this.state.miembros.map(el => (
      <option key={j++}>{el.nombre} </option>
    ));

    let k = 1;
    let filtrosGenerosBanda = this.state.generosBanda.map(el => (
      <option key={k++}>{el.nombre} </option>
    ));

    return (
      <>
        <h3>Filtros</h3>
        <FormGroup>
          <Input
            type="select"
            onChange={this.handleInputChange}
            name="selectMiembros"
            id="exampleSelect1"
          >
            <option selected>Miembros</option>
            {filtrosMiembros}
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
            {filtrosGenerosBanda}
          </Input>
        </FormGroup>

      </>
    );
  }
}
export default FiltrosMusico;
