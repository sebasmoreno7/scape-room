import React, { Component } from 'react';
import '../App.css';
import '../images/adivinador.png'
class Clave extends Component{

        claveFinal = (e) => {
            console.log(e.target.value)
            if (e.target.value === "-65") {
                this.props.history.push(
                    "/ganar"
                )}
        }
    render(){
    return( 
        <figure className="clave"> 
        <div className="container"> 
            <h2>Para que puedas abrir la caja y obtener la llave para salir de la habitación, 
                            tienes que resolver el siguiente problema:
                      (-4 * 3 * 5 + 2 * 8 - 3 * 7)
            </h2>
            <input
            type="text" onChange={this.claveFinal}> 
            </input>
            
    </div>
    </figure>
    )
}
}
export default Clave;