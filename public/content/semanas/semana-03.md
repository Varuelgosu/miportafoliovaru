#  Semana 3 — Prácticas Colaborativas y Desarrollo en Equipo con GitHub

##  Temas aprendidos

Durante la **Semana 3** se realizaron **dos prácticas colaborativas** orientadas al desarrollo web utilizando **HTML, CSS y Tailwind**, aplicando además el **flujo de trabajo colaborativo en GitHub**.  
El objetivo fue aprender cómo trabajar en equipo de manera profesional utilizando **ramas, commits y merges**, al mismo tiempo que se reforzaban los conocimientos de diseño web responsivo, animaciones y estructura de páginas.

---

##  Trabajo colaborativo en Git y GitHub

Antes de comenzar las prácticas, el docente explicó el flujo de trabajo grupal utilizando **GitHub**.  
Los equipos estaban formados por **tres integrantes**, y cada grupo designó a un **líder** encargado de la coordinación y gestión del repositorio.

### 🔹 Flujo de trabajo

1. **Creación del proyecto:**
   - El líder creó un nuevo repositorio en GitHub.
   - Configuró las **3 ramas** con los apellidos de los integrantes (por ejemplo, `perez-sosa`).
   - Dio acceso al repositorio a los compañeros.

2. **Clonación y configuración local:**
   - Cada miembro **clonó el repositorio** en su entorno local usando Visual Studio Code:
     ```bash
     git clone https://github.com/usuario/nombre-del-repo.git
     ```
   - Luego ingresó al proyecto:
     ```bash
     cd nombre-del-repo
     ```

3. **Creación y conexión a ramas:**
   - Cada integrante trabajó en su propia rama:
     ```bash
     git checkout -b nombre-de-tu-rama
     ```

4. **Desarrollo de archivos:**
   - Cada estudiante creó y editó los archivos correspondientes a las prácticas (page01.html, page02.html, etc.).

5. **Guardado y subida de cambios:**
   ```bash
   git add .
   git commit -m "Actualización de mi parte del proyecto"
   git push origin nombre-de-tu-rama
   ```
6. **Pull Request y merge:**
   - En GitHub se creó un pull request (PR) para unir los cambios.
   - El líder revisó los aportes, resolvió conflictos y realizó el merge a la rama principal.

7. **Entrega:**
   - El líder envió el enlace del repositorio por Microsoft Teams dentro del plazo establecido.

 Esta dinámica simuló el entorno real de trabajo en un equipo de desarrollo, fomentando la colaboración, el control de versiones y la responsabilidad compartida.

---

##  Práctica Calificada 1 — Desarrollo con HTML y CSS Puro

 Modalidad: Equipos de 3 integrantes

El objetivo de esta primera práctica fue construir una interfaz web completa con HTML y CSS puro, sin utilizar librerías externas, aplicando animaciones, flexbox y diseño responsivo.

### 🔹 Parte 1: Estructura inicial del proyecto
- El líder creó el repositorio y las ramas por apellido de los miembros.
- Cada integrante trabajó en su rama individual, y el líder integró todo mediante merge.
- Se entregó el enlace del repositorio al docente al finalizar.

### 🔹 Parte 2: page01.html — Formulario con animaciones
**Objetivo:** Diseñar una ventana con 4 íconos SVG y un formulario que contenga:
- 3 text fields, 1 checkbox y 2 botones.
- Un campo de imagen de la misma anchura que los text fields, con un logo SVG centrado.
- Este campo debía responder a drag & drop, mostrando el pathname del archivo cargado.

**Animaciones requeridas:**
- Al hacer clic en un text field (por ejemplo “Email”):
  - El texto del label se desplaza hacia arriba.
  - Cambia de color el texto y la línea inferior de blanco a celeste agua.

 ![Page01](/miportafoliovaru/content/images/semanas/page01.png)

### 🔹 Parte 3: page02.html — Card interactivo de color
- Se debía diseñar un card dividido en dos partes:
  - Parte superior: un rectángulo con bordes redondeados que muestra el color actual.
  - Parte inferior: tres sliders y tres text fields numéricos (0–255) que modifican dinámicamente el color mostrado.
- Todo debía implementarse solo con HTML y CSS puro, sin JavaScript ni librerías adicionales.

 ![Page02](/miportafoliovaru/content/images/semanas/page02.png)

### 🔹 Parte 4: page03.html — Página con imágenes y diseño responsivo
- Diseñar una página con texto, fondo, colores e imágenes similares al ejemplo proporcionado.
- Al pasar el cursor sobre una imagen, esta aumentaba su opacidad un 10%.
- Se debía aplicar diseño responsivo con Flexbox y media queries:
  - Pequeño: < 480px
  - Mediano: < 900px
  - Grande: < 1200px
  - Extra: > 1200px

### 🔹 Parte 5: index.html — Página principal animada
- Página principal creada en HTML y CSS puro, sin frameworks.
- Contenía 3 cards animados que enlazaban a:
  - page01.html
  - page02.html
  - page03.html
- Cada card tenía un título (“Page 1”, “Page 2”, “Page 3”).
- Animación: giro de 180° sobre el eje horizontal (incluyendo eje vertical), creando un efecto 3D al pasar el cursor.

  ![Page03](/miportafoliovaru/content/images/semanas/page03.png)

---

##  Práctica Calificada 2 — Desarrollo con HTML y Tailwind CSS

 Modalidad: Equipos de 3 integrantes

Esta práctica fue una continuación de la anterior, pero utilizando Tailwind CSS como framework para mejorar la rapidez de diseño y la organización de estilos.

### 🔹 Parte 1: page01.html — Listas de mensajes
- Página dividida con grid de 2 columnas y 1 fila.
- Cada columna mostraba una lista de mensajes con íconos SVG, asunto, remitente y vista previa.

**Reglas responsivas:**
- 1400px → 60% de la columna
- < 700px → 100%
- 701px–1399px → 50%

  ![Page001](/miportafoliovaru/content/images/semanas/page001.png)

### 🔹 Parte 2: page02.html — Cards de playas y ciudades del Perú
**a. Cards de Playas:**
- Mostrar 10 cards de las playas más importantes del Perú.
- Cada card tenía 4 imágenes (200x120 px).
- Botones Share y Explore cambiaban a gris claro en hover.
- Distribución con Flexbox y separación de 10px.

**b. Cards de Ciudades:**
- Mostrar 10 cards con información de las principales ciudades.
- Tamaño de card: 250x200px.
- Botón Full Report con efecto hover similar.
- Separación de 5px entre cards.

 ![Page002](/miportafoliovaru/content/images/semanas/page002.png)

### 🔹 Parte 3: page03.html — Galería responsiva
- Página con imágenes y textos distribuidos con Flexbox y Tailwind.
- Al colocar el cursor sobre una imagen, su opacidad aumentaba un 15%.
- Diseño responsivo con media queries en los mismos rangos de tamaño.

 ![Page003](/miportafoliovaru/content/images/semanas/page003.png)

### 🔹 Parte 4: index.html — Página principal animada
- Página en HTML y CSS puro, con 3 cards animados enlazando a page1.html, page2.html y page3.html.
- Animación con rotación de 180° sobre los ejes horizontal y vertical.
- Estilo limpio y moderno.

 ![Page004](/miportafoliovaru/content/images/semanas/page004.png)

---

##  Habilidades desarrolladas
- Uso completo del flujo de trabajo Git/GitHub: ramas, commits, pull requests, merges.
- Práctica de HTML5 y CSS3, con animaciones y efectos visuales.
- Uso de Tailwind CSS para maquetado rápido y responsivo.
- Aplicación de Flexbox y Grid Layout.
- Diseño adaptativo para diferentes resoluciones.
- Trabajo en equipo y sincronización de versiones.

---

##  Resultados de las prácticas

Se generaron dos proyectos funcionales:
- Práctica 1 (HTML + CSS puro)
- Práctica 2 (HTML + Tailwind CSS)

Se logró la correcta integración de ramas en el repositorio.  
Se aplicaron estilos modernos, animaciones y componentes reutilizables.  
Se presentó el link final del repositorio como evidencia del trabajo colaborativo.


---

##  Reflexión
**¿Qué aprendí?**  
Aprendí a trabajar en equipo dentro de un entorno de desarrollo real.  
Entendí la importancia de las ramas para organizar el código y los pull requests para integrar cambios de manera ordenada.  
También reforcé mis conocimientos en diseño web, aplicando tanto CSS clásico como Tailwind para crear páginas modernas, limpias y responsivas.

**¿Cómo aprendí?**  
Mediante la práctica constante, cometiendo errores y resolviendo conflictos de código.  
La colaboración y la comunicación fueron esenciales para el éxito del proyecto.  
Trabajar con GitHub me permitió comprender cómo se gestiona un proyecto real en la industria del software.

---


