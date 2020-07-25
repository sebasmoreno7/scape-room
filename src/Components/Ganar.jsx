import React, { Component } from 'react';
import '../App.css';


class Ganar extends Component {
    abrirPuerta = () => {
         
            this.props.history.push(
                "/cuarto1"
            )}
    
    render(){
        return(
            <div>
                <title>Felicidades, pudiste resolver los mini acertijos de las habitaciones</title>
                <h1>Proximamente tendremos nuevos retos</h1>
                <h2>Si quieres volver a jugar oprime el boton</h2>
                <button onClick={()=> this.abrirPuerta()}>Play</button>
            </div>
        )
    }
}

export default Ganar;