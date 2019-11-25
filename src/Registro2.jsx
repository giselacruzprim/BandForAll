import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {APIURL} from "./Datos.js";

class Registro2 extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      instrumentos: [],
      generos:[]
    };
  }

  componentDidMount() {
    let url1 = APIURL + "bandforall_instrumentos?_size=100";
    fetch(url1)
      .then(datos => datos.json())
      .then(datosConvertidos1 => {
        this.setState({ instrumentos: datosConvertidos1 });
        
      })
      .catch(err => console.log(err));


      let url2 = APIURL + "bandforall_genero?_size=100";
      fetch(url2)
        .then(datos => datos.json())
        .then(datosConvertidos2 => {
          this.setState({ generos: datosConvertidos2 });
          
        })
        .catch(err => console.log(err));
    
  }
 
 
  render() {

    if(this.state.instrumentos.length===0 || this.state.generos.length===0){
      return <h1>cargando...</h1>
    }
    let j = 1;
    let filtrosInstrumentos = this.state.instrumentos.map(el => (
      <option key={j++}>{el.nombre} </option>
    ));

    let k = 1;
    let filtrosGenero = this.state.generos.map(el => <option key={k++}>{el.nombre} </option>);

    return (
      <>
        <form className="container">
          <div className="form-group">
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Teléfono"
            />
          </div>

          <div className="form-group">
            <h5 className="d-block" htmlFor="exampleFormControlInput1">
              Sexo
            </h5>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Mujer
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Hombre
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Otro
              </label>
            </div>
          </div>

          <div class="row">
            <h5>¿Qué instrumentos tocas?</h5>

            <div class="col-7">
              <div class="form-group">
                <select class="form-control">
                  <option>Instrumento</option>
                  {filtrosInstrumentos}
                </select>
                <select class="form-control">
                  <option>Instrumento</option>
                  {filtrosInstrumentos}
                </select>
                <select class="form-control">
                  <option>Instrumento</option>
                  {filtrosInstrumentos}
                </select>
              </div>
            </div>
            <div class="col-5">
              <select class="form-control">
                <option>Nivel</option>
                <option>Principiante</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
              </select>
              <select class="form-control">
                <option>Nivel</option>
                <option>Principiante</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
              </select>
              <select class="form-control">
                <option>Nivel</option>
                <option>Principiante</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <h5>¿Qué géneros tocas?</h5>
            <select class="form-control">
              <option disabled selected>
                Género
              </option>
              {filtrosGenero}
            </select>
            <select class="form-control">
              <option>Género</option>
              {filtrosGenero}
            </select>
          </div>
          <div class="col-7">
            <h5>Localidad</h5>
            <select class="form-control">
              <option>Localidad</option>
            </select>
          </div>

          <div class="form-group">
            <h5 for="exampleFormControlFile1">Adjunta tu foto</h5>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>

          <div class="form-group">
            <h5 for="exampleFormControlTextarea1">Datos adicionales</h5>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </>
    );
  }
}
export default Registro2;
