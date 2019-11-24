import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Button } from "reactstrap";
import { APIURL } from "./Datos.js";

class Tarjetas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">Fluid jumbotron</h1>
                  <p className="lead">
                    This is a modified jumbotron that occupies the entire
                    horizontal space of its parent.
                  </p>
                </Container>
              </Jumbotron>
              <h1>Nombre:</h1>
              <h5>Edad</h5>
              <h5>Instrumento:</h5> <h5>Nivel:</h5>
              <h5>Instrumento:</h5> <h5>Nivel:</h5>
              <h5>Instrumento:</h5> <h5>Nivel:</h5>
              <h5>Generos</h5>
              <Button color="danger">Eliminar usuario</Button>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </>
    );
  }
}
export default Tarjetas;
