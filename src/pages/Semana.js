import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Semana() {
  const { semanaId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const url = `${process.env.PUBLIC_URL}/content/semanas/${semanaId}.md`;
        console.log('Intentando cargar:', url); // DEBUG
        
        const response = await fetch(url);
        
        console.log('Response status:', response.status); // DEBUG
        console.log('Response ok:', response.ok); // DEBUG
        
        if (!response.ok) {
          throw new Error('Archivo no encontrado - Status: ' + response.status);
        }
        
        const text = await response.text();
        console.log('Contenido cargado, primeros 100 caracteres:', text.substring(0, 100)); // DEBUG
        
        setContent(text);
        setLoading(false);
      } catch (error) {
        console.error('Error completo:', error); // DEBUG
        setError(error.message);
        setContent('# Error al cargar el contenido\n\n' + error.message);
        setLoading(false);
      }
    };

    fetchContent();
  }, [semanaId]);

  const semanaNumero = semanaId.split('-')[1];

  if (loading) {
    return (
      <div className="container">
        <p style={{ textAlign: 'center', padding: '2rem' }}>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/cuaderno" className="back-button">
        ← Volver
      </Link>
      
      <div className="page-header">
        <h1>SEMANA {semanaNumero}</h1>
      </div>

      {error && (
        <div style={{ background: 'rgba(255,0,0,0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Semana;