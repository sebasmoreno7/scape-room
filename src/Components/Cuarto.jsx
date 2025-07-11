import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import tanque from '../images/tanque.png';
import puerta from '../images/puerta.png';
import cable from '../images/cable.png';
import llaveImg from '../images/fondo.png';
import agua from '../images/agua.png';

const Cuarto = () => {
  const history = useHistory();
  const [keyVisible, setKeyVisible] = useState(true);
  const [showCable, setShowCable] = useState(true);
  const [doorUnlocked, setDoorUnlocked] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setKeyVisible(false);
    setDoorUnlocked(true);
  };

  const abrirPuerta = () => {
    if (doorUnlocked) {
      history.push('/cuarto2');
    }
  };

  const primeraPerdida = () => {
    if (showCable) {
      history.push('/perder');
    }
  };

  return (
    <figure>
      <div className="container">
        <div className="caja">
          <div className="llave" onClick={primeraPerdida}>
            <img
              src={llaveImg}
              alt="Llave"
              draggable
              onDragStart={(e) => e.dataTransfer.setData('text/plain', 'llave')}
              hidden={!keyVisible}
            />
          </div>
          <img src={agua} alt="Agua" />
          <img src={tanque} alt="Tanque" />
        </div>
        <div className="cajas" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
          <img src={puerta} alt="Puerta" onClick={abrirPuerta} />
        </div>
        <div className="cable" onClick={() => setShowCable(!showCable)} hidden={!showCable}>
          <img src={cable} alt="Cable" />
        </div>
      </div>
    </figure>
  );
};

export default Cuarto;
