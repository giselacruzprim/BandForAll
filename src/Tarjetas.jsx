import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


class Tarjetas extends React.Component {
  render() {

    let genero2 = <></>;

    if (this.props.genero_musico2 !== null) {
      genero2 = (
        <>
          <h5 className="card-title">
            Genero: {this.props.genero_musico2}
          </h5>
        </>
      )
    }




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
                  Genero: {this.props.genero_musico1}
                </h5>
                {genero2}

                <p className="card-text"> {this.props.texto} </p>


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
export default Tarjetas;
