import React from "react";
import "./estilo1.css";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class Taula extends React.Component {

    render() {

        let icona=<><i class="fa fa-times fa-2x" aria-hidden="true" ></i></>;
        if (this.props.item.leido==="si"){
            icona=<i className="fa Fa-Check fa-2x" aria-hidden="true" ></i>;
        }

        return (
            <>
                <table className="user1" align="left" cellPadding="10px" border="4" >

                    <thead>
                        <tr className="tofrom" > 
                            <th>To: {this.props.item.id_from}</th>
                            <th>From: {this.props.item.id_to}</th>
                            <th className="visto"><div>{icona}</div> {this.props.item.leido.hidden}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="vista" colSpan="3">  
                                 Vista previa mensajes: {this.props.item.mensaje}</td>
                            <td style={{ border: "none" }} >
                           
                                <div>
                                    <Button className="boton" outline color="primary" >
                                    <Link to={"/mensaje/"+this.props.item.id}><strong>Ver</strong></Link></Button>{' '}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>

        )
    }

}

export default Taula;