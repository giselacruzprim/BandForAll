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
              Tu banda está aquí, solo te hace falta encontrarla.
              </h1>
              <h4 className="fraseWeb2"><span>34.000+</span> personas ya lo han hecho.</h4>
            </div>
          </div>

          <div className="row dosTarjetas">
            <div className="col-6">
              <div className="card tarjeta" style={{ width: "80%" }}>
                <div clase="ahora">
                  <img src={banda} className="card-img-top" alt="banda" />
                  <div className="card-body">
                    <Link to="/pagTarjetas">Encuentra tu banda</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="card tarjeta" style={{ width: "80%" }}>
                <div className="ahora">
                  <img src={musico} className="card-img-top" alt="musico" />
                  <div className="card-body">
                    <Link to="/pagTarjetas">Encuentra músico</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Presentacion;
