import React, { Component } from 'react';
import '../App.css';
import caja from '../images/caja.png';
import martillo from '../images/martillo.png';
import mesa from '../images/mesa.png';
import puerta from '../images/puerta-1.png';
import serrucho from '../images/prop-2.png';
import tabla from '../images/tabla.png';
import tabla_2 from '../images/tabla-2.png';
class CuartoNext extends Component{
    render() {
        return(
            <main> 
                <img src={mesa} alt="Mesa" />
                <img src={puerta} alt="Puerta-1" />
                <img src={caja} alt="Caja" />
                <img src={martillo} alt="Martillo" />
                <img src={serrucho} alt="Serrucho" />
                <img src={tabla} alt="Tabla" />
                <img src={tabla_2} alt="Tabla-2" />
            </main>
        )
    }
}
 export default CuartoNext;