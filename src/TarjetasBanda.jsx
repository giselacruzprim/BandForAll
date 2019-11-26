import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class TarjetasBanda extends React.Component {
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
                <h5 className="card-title">{this.props.banda}</h5>
                <h5 className="card-title"> Miembros: {this.props.miembros}</h5>
                <h5 className="card-title">
                  Género: {this.props.genero_musical_banda}
                </h5>
                <p className="card-text"> {this.props.descripcion_banda} </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TarjetasBanda;