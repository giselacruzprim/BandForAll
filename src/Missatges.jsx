import React from "react";
import { API_URL, IMG_URL } from "./Utils";
import Taula from './Taula';


class Missatges extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            missatges: []
        };
    }

    componentDidMount() {
        fetch(API_URL + "bandforall_mensajes", { method: "GET" })
            .then(data => data.json())
            .then(dadesConvertides => this.setState({ missatges: dadesConvertides }))

            .catch(err => console.log(err));
    }

    render() {

        if (this.state.item === null) {
            return <h1 className="datos"> Cargando datos...</h1>;
        }
        let taules = this.state.missatges.map(el => <Taula key={el.id} item={el} />);
    

        return (
            <>
                <h2>Missatges</h2>
                <div>
                    {taules}
                </div>
                

            </>
        );
    }
}


export default Missatges;

