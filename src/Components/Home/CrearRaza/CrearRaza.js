import React from 'react';
import { Link } from 'react-router-dom';
import './CrearRaza.css';

function CrearRaza() {
  return (
    <Link to="/new" className='button_crear_perro'>
      <p className='text_button'>Crea una <span className='text_button_naranja'>Raza</span></p>
    </Link>
  )
}

export default CrearRaza;