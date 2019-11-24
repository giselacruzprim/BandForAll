import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import banda from "./fotos/banda.png";
import musico from "./fotos/musico.jpg";

class Presentacion extends React.Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col">
              <h1 class="fraseWeb">
                La mejor música al alcance de tus manos!!!
              </h1>
            </div>
          </div>

          <div class="row dosTarjetas">
            <div class="col-6">
              <Link to="/pagTarjetas">
                <div class="card tarjeta" style={{ width: "80%" }}>
                  <div clase="ahora">
                    <img src={banda} class="card-img-top" alt="banda" />
                    <div class="card-body">Encuentra tu banda</div>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-6">
              <Link to="/pagTarjetas">
                <div class="card tarjeta" style={{ width: "80%" }}>
                  <div class="ahora">
                    <img src={musico} class="card-img-top" alt="musico" />
                    <div class="card-body">Encuentra músico</div>
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
