import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Ganar = () => {
  const history = useHistory();
  const abrirPuerta = () => {
    history.push('/cuarto1');
  };

  return (
    <figure className="gano">
      <div className="container">
        <h1>
          Felicidades, pudiste resolver los mini acertijos de las habitaciones.
          Proximamente tendremos nuevos retos
        </h1>
        <h2>Si quieres volver a jugar oprime el boton</h2>
        <button onClick={abrirPuerta}>Play</button>
      </div>
    </figure>
  );
};

export default Ganar;
