
import React, { Component } from 'react';
import '../App.css';
class Casa extends Component {
    
        
         handleClick(){ 
            console.log('The link was clicked.');  
        }
            
        render(){
        return( 
            <main> 
                <body > 
                <a className="ayuda" href="/cuarto1">Empezar</a>
                <button onClick={this.handleClick}>buenas</button>
            </body>
        </main>
        )
    }
}


export default Casa;
