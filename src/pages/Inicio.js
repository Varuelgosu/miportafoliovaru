import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h2>Hola, soy</h2>
          <h1>Varu</h1>
          <h3>Bienvenidos a mi portafolio</h3>
          <p>
            Soy un estudiante de la carrera de Ingeniería de Sistemas con una gran pasión
            por el desarrollo de software.
          </p>
          <div className="hero-buttons">
            <Link to="/proyectos" className="btn btn-primary">
              Ver Proyectos
            </Link>
            <Link to="/cuaderno" className="btn btn-secondary">
              Semanas 1-8
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/content/images/miimagen.jpg`} alt="Varu" />
        </div>
      </section>

      <section className="info-section">
        <h2>Información Académica</h2>
        <div className="info-box">
          <h3>Centro de Estudios:</h3>
          <ul>
            <li>Universidad Nacional del Centro del Perú, Huancayo, Perú</li>
          </ul>

          <h3>Carrera:</h3>
          <ul>
            <li>Ingeniería de Sistemas</li>
          </ul>

          <h3>Cursos Relevantes:</h3>
          <ul>
            <li>Algorítmica y Estructuras de Datos</li>
            <li>Curso de Redes en Cisco Packet Tracer</li>
            <li>Bases de Datos (SQL Server)</li>
          </ul>

          <h3>Actividades Adicionales:</h3>
          <ul>
            <li>
              Participante en proyección social en la implementación de un software para
              promover el turismo en la provincia de Chupaca.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Inicio;