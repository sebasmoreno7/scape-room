import React, { Component } from 'react';
import '../App.css';
import caja from '../images/caja.png';
import martillo from '../images/martillo.png';
import mesa from '../images/mesa.png';
import puerta from '../images/puerta-1.png';
import serrucho from '../images/prop-2.png';
import tabla from '../images/tabla.png';
import tabla_3 from '../images/tabla-3.png';
import regla from '../images/prop-1.png';
const initialState = {
    mano: '',
    clave: false,
    herramienta: true
}
class CuartoNext extends Component{
    state = initialState
    agarrarClick = () => { console.log("buyeasnasn")
           if (this.mano === '') {
               this.setState(
                   {
                     mano: 'llave',
                    })
                      
                }  console.log("sdvsc")
    }
    abrirPuerta = () => {
        if (this.state.herramienta === false) {
            this.props.history.push(
                "/clave"
            )}
    }
    render() {
        return(
            <figure className="nuevo"> 
                <div className="container_2"> 
                <div className="caja_2"> 
                
                <div className="cajita"> 
                <img src={caja} alt="Caja" />
                </div>
                <div className="martillo"> 
                <img src={martillo} alt="Martillo" onClick={() => 
                {this.setState({herramienta: !this.state.herramienta})}} 
                hidden={!this.state.herramienta} />
                <img src={serrucho} alt="Serrucho" />
                <img src={regla} alt="Regla" />
                </div>
                <div className="mesa"> 
                <img src={mesa} alt="Mesa" onClick={()=> this.abrirPuerta()}/>
                </div>
                </div>


                <div className="puerta"> 
                <img src={puerta} alt="Puerta-1" onClick="" />
                <div className="tabla"> 
                <img src={tabla} alt="Tabla" hidden={!this.state.herramienta} />
                </div>
                <div className="tabla_1"> 
                <img src={tabla_3} alt="Tabla_3" hidden={!this.state.herramienta} />
                </div>
                
                </div>
                </div>
                </figure>
        )
    }
}
 export default CuartoNext;