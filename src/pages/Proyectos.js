import React from 'react';

function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: 'Turismo Chupaca',
      descripcion: 'Sistema informativo web para promover el Turismo y la Cultura en la Provincia de Chupaca.',
      imagen: '/content/images/semanas/a.jpg',
      tecnologias: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      github: 'https://github.com/Varuelgosu/muni-chupaca'
    },
    {
      id: 2,
      titulo: 'Ejercicios de Componentes en React',
      descripcion: '5 ejercicios propuestos usando componentes de React.',
      imagen: '/content/images/semanas/b.jpeg',
      tecnologias: ['React', 'Node.js', 'CSS'],
      github: 'https://github.com/Varuelgosu/componentes-react'
    },
    {
      id: 3,
      titulo: 'Práctica Calificada 1',
      descripcion: 'Construir una interfaz web completa con HTML y CSS puro, sin utilizar librerías externas.',
      imagen: '/content/images/semanas/c.png',
      tecnologias: ['React', 'Node.js', 'CSS'],
      github: 'https://github.com/edison1000msnmsn/404-Not-Founders'
    },
    {
      id: 4,
      titulo: 'Práctica Calificada 2',
      descripcion: 'Utilizando Tailwind CSS como framework para mejorar la rapidez de diseño y la organización de estilos.',
      imagen: '/content/images/semanas/d.png',
      tecnologias: ['React', 'Node.js', 'CSS'],
      github: 'https://github.com/Jhamir-rw/Practica-Calificada-02'
    },
    {
      id: 5,
      titulo: 'Práctica Calificada 3',
      descripcion: 'Se desarrolló una aplicación web de sorteos interactuable y con una interfaz amigable para divertirse.',
      imagen: '/content/images/semanas/e.png',
      tecnologias: ['React', 'Node.js', 'CSS'],
      github: 'https://github.com/GianAS1012/Semana-5'
    }
  ];

  return (
    <div className="container">
      <div className="page-header">
        <h1>Mis Proyectos</h1>
        <p>Una colección de proyectos personales que demuestran mis habilidades en desarrollo web.</p>
      </div>

      <div className="cards-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            <img src={proyecto.imagen} alt={proyecto.titulo} className="project-image" />
            <div className="project-content">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="project-tags">
                {proyecto.tecnologias.map((tech, index) => (
                  <span key={index} className="tag">{tech}</span>
                ))}
              </div>
              <a href={proyecto.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;