import React from "react";
import "./estilo2.css";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { API_URL, IMG_URL } from "./Utils";


class Mensaje extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            mensaje: '',

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.guardaMensaje = this.guardaMensaje.bind(this);

    }
    guardaMensaje(e) {
        e.preventDefault();

        let datos = {
            id: this.state.id,
            id_from: this.state.id_from,
            id_to: this.state.id_to,
            mensaje: this.state.mensaje,
            fecha_hora: this.state.fecha_hora,
            leido: this.state.leido,
        };

        fetch(API_URL + "bandforall_mensajes", {
            method: "PUT",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify(datos)
        })
            .then(data => data.json())
            .then(data => console.log(data))
            .then(() => this.setState({ volver: true }))
            .catch(err => console.log(err));


    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


    componentDidMount() {
        fetch(API_URL + "bandforall_mensajes/" + this.props.match.params.id, { method: "GET" })
            .then(data => data.json())
            .then(dadesConvertides => this.setState(dadesConvertides[0]))

            .catch(err => console.log(err));
    }

    render() {

        if (!this.state.id_from) {
            return <h1 className="datos"> Cargando datos...</h1>;
        }

        let icona = <><i className="fa fa-times fa-2x" aria-hidden="true"></i></>;
        if (this.state.leido === "si") {
            icona = <i className="fa Fa-Check fa-2x" aria-hidden="true"></i>;
        }

        return (
            <>
                <table border="5" cellPadding="10px" >
                    <thead>
                        <tr className="datos" >
                            <th>{this.state.id_from}</th>
                            <th className="visto" > <div>{icona}</div> {this.state.leido.hidden}</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="vistaprev" colSpan="4"> {this.state.mensaje.split("\n").map(e => <p>{e}</p>)}</td>
                        </tr>
                    </tbody>
                </table>

                <form onSubmit={this.guardaMensaje} method="post">
                    <div className="areaescribir" >
                        <label htmlFor="msg"></label>
                        <br />
                        <textarea id="msg" autoComplete="off"  name="mensaje" onChange={this.handleInputChange} placeholder="Escribe aqui." value={this.state.mensaje} ></textarea>
                        <button className="send" class="float-right" outline color="primary" aria-hidden="true"><strong>Enviar</strong></button>
                        <div className="time" >{this.state.fecha_hora}</div>
                    </div>
                </form>

                <div id="footer">
                    <footer className="pie de pagina">
                        <div>

                            <Button className="boton1" outline color="primary" aria-hidden="true">
                                <Link to="/mensajes/" ><strong>Return to Mensajes</strong></Link>
                            </Button>
                        </div>
                    </footer>
                </div>
            </>

        )
    }

}

export default Mensaje;