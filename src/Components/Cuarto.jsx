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
                <div className="container">  
                <div className="caja"> 
                <img src={llave} alt="Llave" />
                <img src={agua} alt="Agua" />
                <img src={tanque} alt="Tanque" />
                </div>
                <div className="cajas">  
                <img src={puerta} alt="Puerta" />
                </div>
                <div className="cable"> 
                <img src={cable} alt="Cable" />
                </div>
                </div>
               
            
        )
    }
}
 export default Cuarto;