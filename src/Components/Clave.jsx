import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import '../images/adivinador.png';

const Clave = () => {
  const history = useHistory();
  const claveFinal = (e) => {
    if (e.target.value === '-65') {
      history.push('/ganar');
    }
  };

  return (
    <figure className="clave">
      <div className="container">
        <h2>
          Para que puedas abrir la caja y obtener la llave para salir de la
          habitación, tienes que resolver el siguiente problema:
          (-4 * 3 * 5 + 2 * 8 - 3 * 7)
        </h2>
        <input type="text" onChange={claveFinal} />
      </div>
    </figure>
  );
};

export default Clave;
