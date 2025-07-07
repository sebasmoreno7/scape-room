
import React, { Component } from 'react';
import '../App.css';
import Comments from './Comments';
class Casa extends Component {
    
        
       
        render(){
        return( 
                <figure className="casa"> 
                <div className="container"> 
                    <h1 className="xness">XNESS ROOM</h1>
                <div className="inicio" >
                <a  href="/cuarto1">Empezar</a>
                </div>
                <Comments />

            </div>
            </figure>
        )
    }
}


export default Casa;
