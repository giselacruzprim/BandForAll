import React from "react";
import "./estilo2.css";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { API_URL, IMG_URL } from "./Utils";


class Mensaje extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            item: null
        };
    }


    componentDidMount() {
        fetch(API_URL + "bandforall_mensajes/" + this.props.match.params.id, { method: "GET" })
            .then(data => data.json())
            .then(dadesConvertides => this.setState({ item: dadesConvertides[0] }))

            .catch(err => console.log(err));
    }

    render() {

        if (this.state.item === null) {
            return <h1 className="datos"> Cargando datos...</h1>;
        }

        let icona=<><i class="fa fa-times fa-2x" aria-hidden="true"></i></>;
        if (this.state.item.leido==="si"){
            icona=<i className="fa Fa-Check fa-2x" aria-hidden="true"></i>;
        }

        return (
            <>
                <table border="5" cellPadding="10px" >
                    <thead>
                        <tr className="datos" >
                            <th>{this.state.item.id_from}</th>
                            <th className="visto" > <div>{icona}</div> {this.state.item.leido}</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="vistaprev" colSpan="4"> {this.state.item.mensaje}</td>
                        </tr>
                    </tbody>
                </table>

                <form action="/my-handling-form-page fa-2x" method="post">
                    <div className="areaescribir">
                        <label htmlFor="msg"></label>
                        <br />
                        <textarea id="msg" ></textarea>
                        <button className="send">Send</button>
                        <time className="time">{this.state.item.fecha_hora}</time>
                    </div>
                </form>

                <div id="footer">
                    <footer className="pie de pagina">
                        <div>
                            <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                            <Button className="boton1" outline color="primary" >
                                <Link to="/mensajes/" float-right>Return to Mensajes</Link>
                            </Button>
                        </div>
                    </footer>
                </div>
            </>

        )
    }

}

export default Mensaje;