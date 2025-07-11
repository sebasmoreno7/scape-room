import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => (
  <figure className="casa">
    <div className="container">
      <h1 className="xness">XNESS ROOM</h1>
      <div className="inicio">
        <Link to="/cuarto1">Empezar</Link>
      </div>
    </div>
  </figure>
);

export default Home;
