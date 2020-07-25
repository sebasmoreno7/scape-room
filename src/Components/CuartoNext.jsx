import React, { Component } from 'react';
import '../App.css';
import caja from '../images/caja.png';
import martillo from '../images/martillo.png';
import mesa from '../images/mesa.png';
import puerta from '../images/puerta-1.png';
import serrucho from '../images/prop-2.png';
import tabla from '../images/tabla.png';
import tabla_3 from '../images/tabla-3.png';
const initialState = {
    mano: '',
    clave: false
}
class CuartoNext extends Component{
    state = initialState

    render() {
        return(
            <figure> 
                <div className="container_2"> 
                <div className="caja_2"> 
                
                <div className="cajita"> 
                <img src={caja} alt="Caja" onClick=""/>
                </div>
                <div className="martillo"> 
                <img src={martillo} alt="Martillo" onClick="" />
                <img src={serrucho} alt="Serrucho" />
                </div>
                <div className="mesa"> 
                <img src={mesa} alt="Mesa" />
                </div>
                </div>


                <div className="puerta"> 
                <img src={puerta} alt="Puerta-1" onClick="" />
                <div className="tabla"> 
                <img src={tabla} alt="Tabla" onClick="" />
                </div>
                <div className="tabla_1"> 
                <img src={tabla_3} alt="Tabla_3" onClick="" />
                </div>
                
                </div>
                </div>
                </figure>
        )
    }
}
 export default CuartoNext;