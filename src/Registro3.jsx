import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Input, Label } from "reactstrap";
import {APIURL} from "./Datos.js";

class Registro3 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      instrumentos: [],
     
    };
  }

  componentDidMount() {
    let url1 = APIURL + "bandforall_instrumentos?_size=100";
    fetch(url1)
      .then(datos => datos.json())
      .then(datosConvertidos => {
        this.setState({ instrumentos: datosConvertidos });
        
      })
      .catch(err => console.log(err));
    
  }
  
  
  render() {
    function deshabilitarBanda() {
      let nombreBanda = document.getElementById("nomBanda");
      let numeroBanda = document.getElementById("numBanda");
      let instrumento1 = document.getElementById("instBanda1");
      let instrumento2 = document.getElementById("instBanda2");
      let instrumento3 = document.getElementById("instBanda3");
      let check = document.getElementById("checkboxBanda");

      if (check.checked) {
        nombreBanda.removeAttribute("disabled", "");
        numeroBanda.removeAttribute("disabled", "");
        instrumento1.removeAttribute("disabled","");
        instrumento2.removeAttribute("disabled","");
        instrumento3.removeAttribute("disabled","");
      } else{
        nombreBanda.setAttribute("disabled", "");
        numeroBanda.setAttribute("disabled", "");
        instrumento1.setAttribute("disabled","");
        instrumento2.setAttribute("disabled","");
        instrumento3.setAttribute("disabled","");
      }
    }

    if(this.state.instrumentos.length===0){
      return <h1>cargando...</h1>
    }

    let j = 1;
    let filtrosInstrumentos = this.state.instrumentos.map(el => (
      <option key={j++}>{el.nombre} </option>
    ));

    return (
      <>
        <form class="container">
          <FormGroup check>
            <Input
            
              type="checkbox"
              onClick={deshabilitarBanda}
              name="check"
              id="checkboxBanda"
            />
            <Label for="exampleCheck" check>
              Anuncio de banda
            </Label>
          </FormGroup>


          <div className="form-group">
            <input
            disabled
              type="text"
              className="form-control"
              id="nomBanda"
              placeholder="Nombre banda"
            />
          </div>
          <div className="form-group">
            <select disabled id="numBanda" className="form-control">
              <option selected disabled>
                Número de miembros
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>6++</option>
            </select>
          </div>

  
          <div className="form-group">
            <select id="instBanda1" disabled className="form-control">
              <option>Instrumento</option>
              {filtrosInstrumentos}
            </select>
            <select id="instBanda2" disabled className="form-control">
              <option>Instrumento</option>
              {filtrosInstrumentos}
            </select>
            <select id="instBanda3" disabled className="form-control">
              <option>Instrumento</option>
              {filtrosInstrumentos}
            </select>
          </div>
        </form>
      </>
    );
  }
}
export default Registro3;
