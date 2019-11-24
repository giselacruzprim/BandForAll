import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class Registro1 extends React.Component {
  render() {
    return (
      <>

        <form class="container">
          <h4>Datos usuario</h4>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Nombre"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <input
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Apellidos"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Confirma email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control password"
              id="exampleFormControlInput1"
              placeholder="Contraseña"
            />
          </div>
        </form>
      </>
    );
  }
}
export default Registro1;
