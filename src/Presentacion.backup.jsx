import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import banda from "./fotos/banda.png";
import musico from "./fotos/musico.jpg";


class Presentacion extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="fraseWeb">
                La mejor música al alcance de tus manos!!!
              </h1>
            </div>
          </div>

          <div className="row dosTarjetas">
            <div className="col-6">
              <Link to="/pagTarjetas">
                <div className="card tarjeta" style={{ width: "80%" }}>
                  <div clase="ahora">
                    <img src={banda} className="card-img-top" alt="banda" />
                    <div className="card-body">Encuentra tu banda</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-6">
              <Link to="/pagTarjetas">
                <div className="card tarjeta" style={{ width: "80%" }}>
                  <div className="ahora">
                    <img src={musico} className="card-img-top" alt="musico" />
                    <div className="card-body">Encuentra músico</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Presentacion;
