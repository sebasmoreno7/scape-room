import React, { Component } from 'react';
import '../App.css';
import tanque from '../images/tanque.png';
import puerta from '../images/puerta.png';
import cable from '../images/cable.png';
import llave from '../images/fondo.png';
import agua from '../images/agua.png';
import Perder from './Perder';
const initialState = {
    mano: '',
    perder: true,
    show: true,
    llave: true
}

class Cuarto extends Component{
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
        if (this.state.llave === false) {
            this.props.history.push(
                "/cuarto2"
            )}
    }
    primeraPerdida = () => {
        if (this.state.show === true)
        this.props.history.push(
            "/perder"
        )
        }
    render() {
        return( 
            <figure> 
                <div className="container">  
                <div className="caja"> 
                <div className="llave" onClick={()=> this.primeraPerdida()}> 
                <img src={llave} alt="Llave" onClick={() => {this.setState({llave: !this.state.llave})}} 
                hidden={!this.state.llave} />
                </div>
                <img src={agua} alt="Agua"  />
                <img src={tanque} alt="Tanque" />
                </div>
                <div className="cajas" >  
                <img src={puerta} alt="Puerta" onClick={() => this.abrirPuerta()} />
                </div>
                <div className="cable" onClick={()=>{this.setState({show: !this.state.show})}} 
                hidden={!this.state.show}> 
                <img src={cable} alt="Cable"  />
                </div>
                </div>
                </figure>
            
        )
    }
}
 export default Cuarto;