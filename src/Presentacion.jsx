import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import banda from "./fotos/targeta1.png";
import musico from "./fotos/targeta2.png";

import { Translate } from "react-localize-redux";
import TriaIdioma, {Triaidioma} from "./TriaIdioma";

class Presentacion extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="fraseWeb">
              <Translate id="global.intro" />

              </h1>
              <h4 className="fraseWeb2">
              <Translate id="global.subintro" />
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <Link to="/pagTarjetasBanda">
                <img src={banda} className="card-img-top" alt="banda" />
              </Link>
            </div>

            <div className="col-12 col-md-6 mb-4">
              <Link to="/pagTarjetas">
                <img src={musico} className="card-img-top" alt="musico" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Presentacion;
