import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import banda from "./fotos/targeta1.png";
import musico from "./fotos/targeta2.png";



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

      
<div className="row">
<div className="col-12 col-md-6 mb-4">
<a href="/pagTarjetasBanda">
                  <img src={banda} className="card-img-top" alt="banda" />
                  </a>

</div>

<div className="col-12 col-md-6 mb-4">
<a href="/pagTarjetas">
            <img src={musico} className="card-img-top" alt="musico" />
</a>
</div>

</div>
     
            {/* <Link to="/pagTarjetas">Encuentra músico</Link> */}
           

            </div>



      </>
    );
  }
}
export default Presentacion;
