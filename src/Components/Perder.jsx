import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Perder = () => {
  const history = useHistory();
  const reiniciar = () => {
    history.push('/cuarto1');
  };

  return (
    <figure className="perdio">
      <div className="container">
        <div className="perdio">
          <h2>Perdiste, la llave mojada te electrocuta con el cable</h2>
          <button onClick={reiniciar}>Play now</button>
        </div>
      </div>
    </figure>
  );
};

export default Perder;
