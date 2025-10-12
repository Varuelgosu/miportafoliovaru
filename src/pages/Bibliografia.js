import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Bibliografia() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/bibliografia.md')
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar el archivo:', error);
        setContent('# Error al cargar el contenido');
        setLoading(false);
      });
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