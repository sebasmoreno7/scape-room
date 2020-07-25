
import React, { Component } from 'react';
import '../App.css';
class Casa extends Component {
    
        
         handleClick = () => { 
            console.log('The link was clicked.');  
        }
            claveFinal = (e) => {
                console.log(e.target.value)
                if (e.target.value === "123") {
                    this.props.history.push(
                        "/perder"
                    )}
            }
        render(){
        return( 
            <main> 
                <input
                type="text" onChange={this.claveFinal}>
                </input>
                <body > 
                <a className="ayuda" href="/cuarto1">Empezar</a>
                <button onClick={this.handleClick}>buenas</button>
            </body>
        </main>
        )
    }
}


export default Casa;
