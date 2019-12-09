import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fotoRegistro from "./fotos/lateral.jpg";



class RegistroImagen extends React.Component {
  render() {
    return (
      <>
 <img src={fotoRegistro} className="card-img-top" alt="banda" />


</>
    );
  }
}
export default RegistroImagen;