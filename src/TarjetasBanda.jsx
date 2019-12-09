import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

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
                <h4 className="card-title">{this.props.nomBanda}</h4>
                <h5 className="card-title"> Miembros: {this.props.numBanda}</h5>
                <h5 className="card-title">
                  Género: {this.props.genero_banda}
                </h5>
                <p className="card-text"> {this.props.textoBanda} </p>

                 {/*  El boton de mensaje. */}

                <button className="vermensajes" outline color="primary" class="float-right" >
                  <Link to={"/mensajes"}>
                    {" "}
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                  </Link>
                </button>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TarjetasBanda;
