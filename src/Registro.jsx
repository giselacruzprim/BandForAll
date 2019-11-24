import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Registro1 from "./Registro1";
import Registro2 from "./Registro2";
import Registro3 from "./Registro3";
import RegistroImagen from "./RegistroImagen.jsx";

class Registro extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <RegistroImagen/>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col">
                  <Registro1 />

                  <div className="row">
                    <div className="col">
                      <Registro2 />
                    </div>
                    <div className="col">
                      <Registro3 />
                    </div>
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
export default Registro;
