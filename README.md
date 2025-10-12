#  Portafolio Varu

Este es mi portafolio personal, desarrollado con **React**, donde documento mi proceso de aprendizaje en el curso **Desarrollo de Aplicaciones Web**.  
Aquí encontrarás mi cuaderno de trabajo, proyectos, reflexión final y bibliografía, organizados semana a semana.

> Actualmente el portafolio está avanzado hasta la **Semana 8**, y se irá actualizando progresivamente con nuevo contenido conforme transcurran las semanas (**Semana 9 → Semana 16**).

---

##  Cómo Ejecutarlo en Local

Si deseas ver este portafolio en tu computadora:

1. **Instalar dependencias**
   ```sh
   npm install
   ```

2. **Ejecutar en modo desarrollo**
   ```sh
   npm start
   ```
   El sitio se abrirá automáticamente en  
   👉 [http://localhost:3000](http://localhost:3000)

3. **Compilar para producción**
   ```sh
   npm run build
   ```

---

##  Estructura General

```
miportafoliovaru/
├── public/
│   ├── content/
│   │   ├── semanas/               <- Markdown de cada semana (01 a 16)
│   │   ├── images/                <- Imágenes de perfil, proyectos y semanas
│   │   ├── sobre-mi.md
│   │   ├── reflexion-final.md
│   │   └── bibliografia.md
├── src/
│   ├── components/                <- Componentes principales (Navbar, Footer)
│   ├── pages/                     <- Páginas del sitio
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

##  Contenido del Portafolio

- **Cuaderno:** contiene las semanas del curso desde la Semana 1 hasta la Semana 8 (por ahora).  
  Cada semana incluye teoría, práctica, ejercicios e imágenes de desarrollo.

- **Proyectos:** muestra algunos de mis trabajos y ejercicios hechos en clase (React, HTML, CSS, JavaScript, etc.).

- **Sobre mí:** una pequeña presentación personal.

- **Reflexión final:** resumen de lo aprendido al finalizar el curso.

- **Bibliografía:** recursos y enlaces utilizados a lo largo del ciclo.

---

##  Próximas Actualizaciones

-  Hasta el momento: contenido completo hasta la **Semana 8**.
-  Próximamente: se agregarán las **Semanas 9 a 16**, con nuevas prácticas, reflexiones y mejoras visuales en el diseño.

---

##  Publicación en GitHub Pages

Para desplegar este portafolio en línea:

1. Asegúrate de agregar tu usuario de GitHub en `package.json`:

   ```json
   "homepage": "https://Varuelgosu.github.io/miportafoliovaru"
   ```

2. Instala `gh-pages`:

   ```sh
   npm install --save gh-pages
   ```

3. Despliega con:

   ```sh
   npm run deploy
   ```

4. Luego ve a **Settings → Pages → Source → gh-pages branch**.

---

##  Tecnologías Utilizadas

- React 18
- React Router DOM
- React Markdown + Remark GFM
- CSS personalizado

---

##  Estilo y Personalización

Los estilos se encuentran en `src/App.css`.  
**Paleta de colores actual:**

- Fondo: `#1a1a2e`
- Acento: `#3b82f6`
- Texto: `#ffffff`

Puedo seguir modificando los colores, fuentes e íconos para mantener una apariencia moderna y consistente.

---

Desarrollado por **Elvis Gutierrez**  
 Año académico 2025