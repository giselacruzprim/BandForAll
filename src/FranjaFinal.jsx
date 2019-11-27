import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import getit2 from "./fotos/getit2.png";
import getit1 from "./fotos/getit1.png";

class FranjaFinal extends React.Component {
  render() {
    return (
      <>
       

          <div className="centrar">

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
<br/>
            {/* get it on google play/appstore botones */}
            <div className="getits">
              <img src={getit1} className="card-img-top getit" alt="musico" />
              <img src={getit2} className="card-img-top getit" alt="musico" />
            </div>
          </div>



      </>
    );
  }
}
export default FranjaFinal;
