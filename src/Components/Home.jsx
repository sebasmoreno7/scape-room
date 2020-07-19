
import React, { Component } from 'react';
import Cuarto from './Cuarto';
class Casa extends Component {
    render(){
        
        return( 
            <main> 
            <form>
                <div className="row">
                    
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control
                        form-control-lg" placeholder="Tu nombre" />
                    </div>
                
                </div>
            </form>
            <button type="button" onClick={Cuarto}>
            Start
        </button>
        </main>
        )
    }
}

export default Casa;
