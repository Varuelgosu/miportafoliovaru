import React from 'react';
import { Link } from 'react-router-dom';

function Cuaderno() {
  const semanas = [
    { id: 'semana-01', numero: '01', titulo: 'Semana 01', descripcion: 'Contenido y ejercicios de la semana 1' },
    { id: 'semana-02', numero: '02', titulo: 'Semana 02', descripcion: 'Contenido y ejercicios de la semana 2' },
    { id: 'semana-03', numero: '03', titulo: 'Semana 03', descripcion: 'Contenido y ejercicios de la semana 3' },
    { id: 'semana-04', numero: '04', titulo: 'Semana 04', descripcion: 'Contenido y ejercicios de la semana 4' },
    { id: 'semana-05', numero: '05', titulo: 'Semana 05', descripcion: 'Contenido y ejercicios de la semana 5' },
    { id: 'semana-06', numero: '06', titulo: 'Semana 06', descripcion: 'Contenido y ejercicios de la semana 6' },
    { id: 'semana-07', numero: '07', titulo: 'Semana 07', descripcion: 'Contenido y ejercicios de la semana 7' },
    { id: 'semana-08', numero: '08', titulo: 'Semana 08', descripcion: 'Contenido y ejercicios de la semana 8' },
  ];

  return (
    <div className="container">
      <div className="page-header">
        <h1>Semanas de Aprendizaje en el curso de Desarrollo de Aplicaciones Web</h1>
        <p>Explora mi trayectoria semana por semana. Cada tarjeta contiene ejercicios, teoría y reflexión.</p>
      </div>

      <div className="cards-grid">
        {semanas.map((semana) => (
          <div key={semana.id} className="card">
            <span className="card-badge">Semana {semana.numero}</span>
            <h3>{semana.titulo}</h3>
            <p>{semana.descripcion}</p>
            <Link to={`/cuaderno/${semana.id}`} className="btn btn-secondary">
              Ver contenido
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cuaderno;