import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { APIURL } from "./Datos.js";

class Registro1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      confirmaEmail: "",
      contrasenya: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.creaUsuario = this.creaUsuario.bind(this);
    
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  creaUsuario(event) {
    event.preventDefault();

    let prod = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email,
      confirmaEmail: this.state.confirmaEmail,
      contrasenya: this.state.contrasenya
    };

    fetch(APIURL + "bandforall_musico", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(prod)
    })
      .then(data => data.json())
      .then(data => console.log(data))
      .then(() => this.setState({ volver: true }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <form className="container" onSubmit={this.creaUsuario}>
          <h4>Datos usuario</h4>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  onChange={this.handleInputChange}
                  value={this.state.nombre}
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Nombre"
                  name="nombre"
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <input
                  onChange={this.handleInputChange}
                  value={this.state.apellido}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Apellidos"
                  name="apellido"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              value={this.state.email}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              value={this.state.confirmaEmail}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Confirma email"
              name="confirmaEmail"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              value={this.state.contrasenya}
              type="password"
              className="form-control password"
              id="exampleFormControlInput1"
              placeholder="Contraseña"
              name="contrasenya"
            />
          </div>
          <input type="submit" value="Enviar" />
        </form>
      </>
    );
  }
}
export default Registro1;
