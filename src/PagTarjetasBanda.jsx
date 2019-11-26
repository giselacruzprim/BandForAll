import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TarjetasBanda from "./TarjetasBanda.jsx";
import { APIURL, ELEMENTOS_POR_PAGINA } from "./Datos.js";

class PagTarjetasBanda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banda: [],
      pagina: 0
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
    let url =
      APIURL +
      `bandforall_musico?_size=${ELEMENTOS_POR_PAGINA}&_p=${this.state.pagina}`;
    fetch(url)
      .then(datos => datos.json())
      .then(datosConvertidosBanda => {
        this.setState({ banda: datosConvertidosBanda });
      })

      .catch(err => console.log(err));
  }

  cargaFiltro(generoBanda, miembros) {
    let url = "";
    let afiltros = [];
    if (generoBanda !== "GéneroBanda") {
      afiltros.push(`(genero_musical_banda,like,${generoBanda}~)`);
    }
    if (miembros !== "Miembros") {
      afiltros.push(`(miembros,like,${miembros}~)`);
    }

    if (afiltros.length == 0) {
      url = `${APIURL}bandforall_musico?_size=100`;
    } else {
      url =
        `${APIURL}bandforall_musico?_size=100&_where=` + afiltros.join("~and");
    }

    url = encodeURI(url);
    console.log("URL", url);

    fetch(url)
      .then(data => data.json())
      .then(datosConvertidosBanda => {
        this.setState({ banda: datosConvertidosBanda });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.banda.length === null) {
      return <h4>Esperando datos...</h4>;
    }

    let i = 1;
    let varTarjetasBandaBanda = this.state.banda.map(el => (
      <TarjetasBanda
        key={i++}
        banda={el.banda}
        miembros={el.miembros}
        genero_musical_banda={el.genero_musical_banda}
        descripcion_banda={el.descripcion_banda}
      />
    ));

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <FiltrosBanda cargaFiltro={this.cargaFiltro} />
            </div>
            <div className="col-10">
              {varTarjetasBanda}
              <button
                disabled={this.state.pagina === 0}
                className="btn btn-primary"
                onClick={this.anterior}
              >
                Anterior
              </button>
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
      </>
    );
  }
}
export default PagTarjetasBanda;
