import React, { Component } from 'react';

class Perder extends Component {
    abrirPuerta = () => {
         
        this.props.history.push(
            "/cuarto1"
        )}
    render() {
        return(
            <figure className="perdio"> 
                <div className="container"> 
                <div className="perdio">
                <h2>Perdiste, la llave mojada te electrocuta con el cable</h2>
                <button onClick={()=> this.abrirPuerta()}>Play now</button>
            </div>
                </div>
            
            
            </figure>
            
        )
    }
}

export default Perder;