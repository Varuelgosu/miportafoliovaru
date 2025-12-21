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
    { id: 'semana-09', numero: '09', titulo: 'Semana 09', descripcion: 'Contenido y ejercicios de la semana 9' },
    { id: 'semana-10', numero: '10', titulo: 'Semana 10', descripcion: 'Contenido y ejercicios de la semana 10' },
    { id: 'semana-11', numero: '11', titulo: 'Semana 11', descripcion: 'Contenido y ejercicios de la semana 11' },
    { id: 'semana-12', numero: '12', titulo: 'Semana 12', descripcion: 'Contenido y ejercicios de la semana 12' },
    { id: 'semana-13', numero: '13', titulo: 'Semana 13', descripcion: 'Contenido y ejercicios de la semana 13' },
    { id: 'semana-14', numero: '14', titulo: 'Semana 14', descripcion: 'Contenido y ejercicios de la semana 14' },
    { id: 'semana-15', numero: '15', titulo: 'Semana 15', descripcion: 'Contenido y ejercicios de la semana 15' },
    { id: 'semana-16', numero: '16', titulo: 'Semana 16', descripcion: 'Contenido y ejercicios de la semana 16' },
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