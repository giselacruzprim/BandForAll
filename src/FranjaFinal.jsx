import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
} from "reactstrap";

// HACER MAÑANA :)!!
import banda from "./fotos/targeta1.png";
import musico from "./fotos/targeta2.png";

class FranjaFinal extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navegadorInicial navbar navbar-dark bg-dark">
          <div className="container-fluid final">
            {/* <UncontrolledDropdown direction="up">
              <DropdownToggle caret>Idiomas</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Español</DropdownItem>
                <DropdownItem>Catalán</DropdownItem>
                <DropdownItem>Inglés</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}

            <div className="iconos">
              <i
                className="fa fa-facebook-official"
                style={{ color: "white" }}
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-instagram"
                style={{ color: "white" }}
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-twitter"
                style={{ color: "white" }}
                aria-hidden="true"
              ></i>
            </div>
          </div>

          <div>  <img src={musico} className="card-img-top" alt="musico" /></div>
        </nav>
      </>
    );
  }
}
export default FranjaFinal;
