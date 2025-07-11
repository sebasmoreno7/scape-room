import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import caja from '../images/caja.png';
import martillo from '../images/martillo.png';
import mesa from '../images/mesa.png';
import puerta from '../images/puerta-1.png';
import serrucho from '../images/prop-2.png';
import tabla from '../images/tabla.png';
import tabla3 from '../images/tabla-3.png';
import regla from '../images/prop-1.png';

const CuartoNext = () => {
  const history = useHistory();
  const [herramienta, setHerramienta] = useState(true);

  const abrirPuerta = () => {
    if (!herramienta) {
      history.push('/clave');
    }
  };

  return (
    <figure className="nuevo">
      <div className="container_2">
        <div className="caja_2">
          <div className="cajita">
            <img src={caja} alt="Caja" />
          </div>
          <div className="martillo">
            <img
              src={martillo}
              alt="Martillo"
              onClick={() => setHerramienta(!herramienta)}
              hidden={!herramienta}
            />
            <img src={serrucho} alt="Serrucho" />
            <img src={regla} alt="Regla" />
          </div>
          <div className="mesa">
            <img src={mesa} alt="Mesa" onClick={abrirPuerta} />
          </div>
        </div>
        <div className="puerta">
          <img src={puerta} alt="Puerta-1" />
          <div className="tabla">
            <img src={tabla} alt="Tabla" hidden={!herramienta} />
          </div>
          <div className="tabla_1">
            <img src={tabla3} alt="Tabla_3" hidden={!herramienta} />
          </div>
        </div>
      </div>
    </figure>
  );
};

export default CuartoNext;
