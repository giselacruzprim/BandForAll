import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container, Button } from "reactstrap";


class perfilUsuario extends React.Component {
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
            <div className="col-3"></div>
            <div className="col-5">
              <Jumbotron fluid>
                <Container fluid>
                  <h1 className="display-3">Perfil</h1>
                  <p className="lead">
                    This is a modified jumbotron that occupies the entire
                    horizontal space of its parent.
                  </p>
                </Container>
              </Jumbotron>
              <div className="row">
                <h2>Nombre:</h2>  <h2>Apellido:</h2>
                <div className="col-5"></div>
                
                <div className="col-7"></div>
              </div>

              <h5>Edad</h5>
              <h5>Instrumento 1:</h5> <h5>Nivel:</h5>
              <h5>Instrumento 2:</h5> <h5>Nivel:</h5>
              <h5>Instrumento 3:</h5> <h5>Nivel:</h5>
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
export default perfilUsuario;
