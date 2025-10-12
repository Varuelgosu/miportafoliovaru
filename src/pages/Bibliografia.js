import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Bibliografia() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/content/bibliografia.md`);
        
        if (!response.ok) {
          throw new Error('Archivo no encontrado');
        }
        
        const text = await response.text();
        setContent(text);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
        setContent('# Error al cargar el contenido\n\nNo se pudo encontrar el archivo `bibliografia.md` en `public/content/`');
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <p style={{ textAlign: 'center', padding: '2rem' }}>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Bibliografía</h1>
      </div>

      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Bibliografia;