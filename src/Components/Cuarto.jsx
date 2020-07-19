import React, { Component } from 'react';
import '../App.css';
import tanque from '../images/tanque.png';
import tanque2 from '../images/tanque-vacio.png';
import borde from '../images/borde.png';
import puerta from '../images/puerta.png';
import cable from '../images/cable.png';
import llave from '../images/fondo.png';
import agua from '../images/agua.png';
class Cuarto extends Component{
    render() {
        return(
            <main> 
                <img src={borde} alt="Borde" />
                <img src={puerta} alt="Puerta" />
                <img src={tanque} alt="Tanque" />
                <img src={tanque2} alt="Tanque2" />
                <img src={cable} alt="Cable" />
                <img src={llave} alt="Llave" />
                <img src={agua} alt="Agua" />
            </main>
        )
    }
}
 export default Cuarto;