import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class Tarjetas extends React.Component {
  render() {
    return (
      <>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props.imagen} className="card-img" alt="tarjeta" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {this.props.nombre} {this.props.apellidos}
                </h5>
                <h5 className="card-title">
                 Edad: {this.props.edad}
                </h5>
                <h5 className="card-title">
                 Instrumento 1: {this.props.instrumento1}
                </h5>
                <h5 className="card-title">
                 Instrumento 2: {this.props.instrumento2}
                </h5>
                <h5 className="card-title">
                Genero: {this.props.genero_musical}
                </h5>
                <p className="card-text"> {this.props.texto} </p>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Tarjetas;
