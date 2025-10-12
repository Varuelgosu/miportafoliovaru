#  Semana 5 — Práctica Colaborativa y Introducción a React.js

##  Temas aprendidos

Durante la **Semana 5** se combinaron actividades prácticas y teóricas que marcaron el inicio del desarrollo de **aplicaciones web interactivas** con frameworks modernos.

- Primero, se realizó una **Práctica Colaborativa (Práctica Calificada 3)** en **HTML, CSS y JavaScript puro**, mejorando las habilidades de programación y trabajo en equipo con GitHub.  
- Luego, se desarrolló la parte **teórica de Introducción a React.js** del grupo restante, explorando el entorno, herramientas y conceptos fundamentales de este popular framework frontend.

---

##  Práctica Colaborativa — Práctica Calificada 3

 **Modalidad:** Equipos de 3 integrantes  

###  Objetivo

Desarrollar una **aplicación web interactiva tipo aula virtual** con funcionalidades de:
- **Ruleta aleatoria**
- **Sorteo automático de equipos**
- **Persistencia de datos con localStorage**
- **Interactividad mediante teclado y mouse**

Todo debía realizarse con **HTML, CSS y JavaScript puro**, sin librerías externas, y gestionarse colaborativamente mediante GitHub.

---

### 🔹 Organización del trabajo en equipo

1. **El líder** del equipo creó el repositorio en GitHub.  
2. Cada integrante trabajó en su **rama individual**.  
3. Se utilizaron comandos básicos para control de versiones:
   ```bash
   git add .
   git commit -m "Avance de mi parte del proyecto"
   git push origin mi-rama
   ```
   El líder realizó el merge final y subió el proyecto antes de la hora límite (12:15).

   Equipos que entregaron fuera de tiempo recibían una penalización (nota 08 o menor).

---

### 🔹 Parte 1 — Ruleta dinámica

**Funcionalidades:**
- (F1) Ruleta subdividida en sectores con 5 colores básicos.
- (F2) Los elementos de la ruleta se obtienen de un TextArea editable.
- (F3) Al hacer clic, presionar la barra espaciadora o el botón “Iniciar”, la ruleta gira aleatoriamente.
- (F4) Los datos del TextArea se guardan automáticamente en el localStorage.
- (F5) Los cambios en el TextArea actualizan la ruleta en tiempo real.
- (F6) Presionando la tecla S, se resalta en gris el último elemento sorteado y se oculta en la ruleta.
- (F7) Con la tecla E o clic en el TextArea, se habilita la edición manual.
- (F8) Con la tecla R o botón “Reiniciar”, se restablece todo y se vuelven visibles los elementos ocultos.
- (F9) Con la tecla F, la aplicación pasa a pantalla completa.


![Ejercicio1](/miportafoliovaru/content/images/semanas/ejer1.png)
---

### 🔹 Parte 2 — Sorteo aleatorio de equipos

**Funcionalidades:**
- (F1) Lista editable de participantes (hasta 100). Guardada automáticamente en localStorage.
- (F2) Selección de modo de sorteo:  
  - Por cantidad de equipos a generar  
  - Por cantidad de participantes por equipo
- (F3) Botón “Generar” inicia el sorteo.  
  Muestra los resultados en una pantalla con rectángulos coloridos, agrupando a los miembros por equipo.
- (F4) Botones adicionales:
  - Descargar resultados en JPG
  - Copiar al portapapeles
  - Copiar en columnas organizadas

![Ejercicio2](/miportafoliovaru/content/images/semanas/ejer2.png)

---

##  Habilidades fortalecidas

- Trabajo en equipo con Git y GitHub.
- Uso avanzado de JavaScript (DOM, eventos, animaciones, almacenamiento local).
- Diseño dinámico con CSS.
- Lógica de aleatoriedad y distribución de datos.
- Práctica de nomenclatura descriptiva y código legible.

---

##  Introducción a React.js

 Fuente: Mg. Jaime Suasnabar Terrel

Después de la práctica, se inició la introducción al framework React.js, el más utilizado actualmente para construir interfaces dinámicas.

🔹 ¿Qué es React?  
React es una biblioteca de JavaScript creada por Jordan Walke (Facebook, 2011) y lanzada públicamente en 2013.  
Su función es crear interfaces de usuario (UI) mediante componentes reutilizables.

React se usa para construir SPA (Single Page Applications), donde el contenido cambia sin recargar toda la página.

---

### 🔹 Características clave

- Basado en componentes.
- Usa JSX, una mezcla entre HTML y JavaScript.
- Actualiza la interfaz de forma eficiente mediante un DOM Virtual.
- Permite crear aplicaciones reactivas y modulares.

**Ejemplo básico:**
```html
<div id="root"></div>

<script type="text/babel">
  function Saludo() {
    return <h1>¡Hola, React!</h1>;
  }

  ReactDOM.render(<Saludo />, document.getElementById("root"));
</script>
```

---

### 🔹 Requisitos previos

Antes de usar React, se necesita:
- Node.js y npm instalados
- Conocimientos de HTML, CSS y JavaScript
- Familiaridad con la terminal y control de versiones

**Pasos de instalación:**
- Descargar Node LTS desde https://nodejs.org/es/
- Instalar con configuración por defecto
- Verificar versiones:
```bash
node -v
npm -v
```

---

### 🔹 Entorno de desarrollo y herramientas

React puede instalarse y configurarse mediante distintas herramientas de inicialización:

| Herramienta           | Descripción breve                                                   |
|-----------------------|---------------------------------------------------------------------|
| Create React App (CRA)| Configuración automática del entorno con Webpack, Babel y ESLint. Ideal para principiantes. |
| Vite                  | Herramienta moderna, rápida y ligera. Ideal para proyectos nuevos.  |
| Next.js               | Framework basado en React con renderizado del lado del servidor (SSR). Ideal para apps grandes.  |

**Ejemplo: crear proyecto con Vite**
```bash
npm create vite@latest mi-proyecto
cd mi-proyecto
npm install
npm run dev
```

---

### 🔹 Herramientas y dependencias

React se apoya en un conjunto de tecnologías para optimizar el flujo de trabajo:

- Babel: Transforma el código JSX a JavaScript estándar.
- Webpack o Turbopack: Empaqueta los módulos del proyecto.
- ESLint: Analiza errores y estandariza el estilo de código.
- SASS / SCSS: Preprocesador de estilos avanzado.
- Font Awesome y Favicon.io: Herramientas de íconos y personalización visual.

**Ejemplo de uso de Babel:**
```js
let nombre = "Varu";
let saludo = `Hola, ${nombre}`;
console.log(saludo);
```
Babel convierte este código ES6 en una versión compatible con navegadores antiguos.

---

### 🔹 React con CDN (sin instalación)

También es posible usar React directamente en HTML mediante enlaces CDN:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<div id="root"></div>
<script type="text/babel">
  const App = () => <h2>Hola desde React sin instalación</h2>;
  ReactDOM.render(<App />, document.getElementById("root"));
</script>
```

---

### 🔹 Conceptos iniciales en React

| Concepto     | Descripción                                         |
|--------------|-----------------------------------------------------|
| Componentes  | Bloques reutilizables de interfaz (function o class).|
| Props        | Parámetros que los componentes reciben.              |
| State        | Datos internos que cambian con la interacción.       |
| JSX          | Sintaxis que combina JavaScript con HTML.            |
| Renderizado  | Proceso de mostrar componentes en el DOM.            |

**Ejemplo de componente con estado:**
```jsx
function Contador() {
  const [contador, setContador] = React.useState(0);
  return (
    <div>
      <h3>Contador: {contador}</h3>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}
```

---

##  Habilidades desarrolladas

- Colaboración avanzada con GitHub y control de versiones.
- Dominio de HTML, CSS y JavaScript para proyectos dinámicos.
- Introducción al ecosistema de React.js.
- Comprensión del uso de Babel, Webpack, ESLint y Vite.
- Creación de componentes y renderizado básico.
- Conexión entre la teoría y la práctica del desarrollo moderno.

---

##  Reflexión

**¿Qué aprendí?**  
Aprendí a trabajar con código colaborativo y aplicar lógica avanzada en JavaScript.  
Entendí cómo React transforma la manera de construir interfaces, introduciendo un enfoque modular y eficiente.  
También conocí las herramientas esenciales que simplifican la configuración del entorno de desarrollo.

**¿Cómo aprendí?**  
Mediante la práctica grupal, resolviendo desafíos de programación real y explorando ejemplos guiados en clase.  
El aprendizaje fue tanto técnico como conceptual, combinando lógica, estructura y organización.

---

