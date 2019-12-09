import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FiltrosMusico from "./FiltrosMusico.jsx";
import Tarjetas from "./Tarjetas.jsx";
import { APIURL, ELEMENTOS_POR_PAGINA } from "./Datos.js";

class PagTarjetas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musicos: [],
      pagina: 0,
      afiltros: []
    };

    this.cargaDatos = this.cargaDatos.bind(this);
    this.cargaFiltro = this.cargaFiltro.bind(this);
    this.siguiente = this.siguiente.bind(this);
    this.anterior = this.anterior.bind(this);
  }

  anterior() {
    this.setState({ pagina: this.state.pagina - 1 }, this.cargaDatos);
  }
  siguiente() {
    this.setState({ pagina: this.state.pagina + 1 }, this.cargaDatos);
  }

  componentDidMount() {
    fetch(APIURL + "bandforall_musico/count")
      .then(data => data.json())
      .then(resultado =>
        this.setState(
          {
            max_pagina: Math.floor(
              resultado[0].no_of_rows / ELEMENTOS_POR_PAGINA
            )
          },
          this.cargaSelect
        )
      )
      .catch(err => console.log(err));

    this.cargaDatos(0);
  }

  cargaDatos() {
    let url; // = APIURL + `bandforall_musico?_size=${ELEMENTOS_POR_PAGINA}&_p=${this.state.pagina}`;

    if (this.state.afiltros.length == 0) {
      url = `${APIURL}bandforall_musico?_size=${ELEMENTOS_POR_PAGINA}&_p=${this.state.pagina}`;
    } else {
      url =
        `${APIURL}bandforall_musico?_size=${ELEMENTOS_POR_PAGINA}&_p=${this.state.pagina}&_where=` +
        this.state.afiltros.join("~and");
    }

    url = encodeURI(url);

    fetch(url)
      .then(datos => datos.json())
      .then(datosConvertidos => {
        this.setState({ musicos: datosConvertidos });
      })

      .catch(err => console.log(err));
      window.scrollTo(0, 0)
  }

  rangos(edad) {
    if (edad === "rango1") {
      return [0, 20];
    } else if (edad === "rango2") {
      return [21, 30];
    } else if (edad === "rango3") {
      return [31, 40];
    } else if (edad === "rango4") {
      return [41, 99];
    }
  }

  cargaFiltro(genero, instrumento, edad) {
    let url = "";
    let afiltros = [];

    if (genero !== "Género") {
      afiltros.push(
        `(genero_musico1,like,${genero}~)~or(genero_musico2,like,${genero}~)`
      );
    }
    if (instrumento !== "Instrumento") {
      afiltros.push(
        `((instrumento1,like,${instrumento}~)~or(instrumento2,like,${instrumento}~)~or(instrumento3,like,${instrumento}~)~or(instrumento4,like,${instrumento}~)~or(instrumento5,like,${instrumento}~))`
      );
    }
    if (edad !== "Edad") {
      let minmax = this.rangos(edad);
      afiltros.push(`((edad,gte,${minmax[0]})~and(edad,lte,${minmax[1]}))`);
    }

    this.setState({ afiltros });

    if (afiltros.length == 0) {
      url = `${APIURL}bandforall_musico?_size=${ELEMENTOS_POR_PAGINA}&_p=${this.state.pagina}`;
    } else {
      url =
        `${APIURL}bandforall_musico?_size=${ELEMENTOS_POR_PAGINA}&_p=${this.state.pagina}&_where=` +
        afiltros.join("~and");
    }

    url = encodeURI(url);

    console.log("URL", url);

    fetch(url)
      .then(data => data.json())
      .then(datosConvertidos => {
        this.setState({ musicos: datosConvertidos });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.musicos.length === null) {
      return <h4>Esperando datos...</h4>;
    }

    let i = 1;
    let varTarjetas = this.state.musicos.map(el => (
      <div className="col-6">
        <Tarjetas
          key={i++}
          nombre={el.nombre}
          apellidos={el.apellidos}
          edad={el.edad}
          imagen={el.imagen}
          texto={el.descripcion}
          instrumento1={el.instrumento1}
          instrumento2={el.instrumento2}
          genero_musico1={el.genero_musico1}
          genero_musico2={el.genero_musico2}
        />
      </div>
    ));

    return (
      <>
        <br></br>
        <h1>Encuentra tu músico</h1>
        <br></br>
        <div className="container-fluid">


          <div className="row">
            <div className="col-2">
              <FiltrosMusico cargaFiltro={this.cargaFiltro} />
            </div>
            <div className="col-10">
              
              <div className="row">
              {varTarjetas}
              </div>
              
              
              </div>
          </div>



          <div className="row">
          <div className="col-3"></div>
          <div className="col-9">
            <div className="row">

            <div className="col-1">
          <button
                disabled={this.state.pagina === 0}
                className="btn btn-primary"
                onClick={this.anterior}
              >
                Anterior
              </button>
              </div>
              <div className="col-11">
              <button
                disabled={this.state.pagina === this.state.max_pagina}
                className="btn btn-primary"
                onClick={this.siguiente}
              >
                Siguiente
              </button>
              </div>
              </div>
              </div>
          </div>
        </div>
      </>
    );
  }
}
export default PagTarjetas;
