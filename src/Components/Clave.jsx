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
        <body className="ayuda"> 
        <main className="nuevo"> 
            <h1>Para que puedas abrir la caja y obtener la llave para salir de la habitación, 
                            tienes que resolver éste problema:
                    -4 * 3 * 5 + 2 * 8 - 3 * 7
            </h1>
            <input
            type="text" onChange={this.claveFinal}> 
            </input>
            
    </main>
    </body>
    )
}
}
export default Clave;