#  Semana 6 — Componentes en React.js y Comunicación entre Componentes

##  Temas aprendidos

Durante la **Semana 6** se profundizó en el funcionamiento interno de **React.js**, enfocándose en la creación, estructura y comunicación de **componentes**, que son la base de toda aplicación construida con este framework.  
Además, se explicó cómo React actualiza el DOM mediante el **DOM Virtual**, y se revisaron ejemplos prácticos sobre **JSX, props, children** y **estilos**.  

La clase combinó teoría guiada y práctica conceptual, culminando con el desarrollo de una **tarea de implementación de componentes**.

---

##  Concepto de Componente en React

Un **componente** es una pieza reutilizable de código que representa una parte de la interfaz de usuario (UI).  
Cada componente puede tener su propio HTML, CSS y JavaScript integrados.

**Tipos principales de componentes:**
- **Componentes de Clase**
- **Componentes de Función**

React renderiza los componentes en el navegador utilizando la función:
```jsx
ReactDOM.render(<App />, document.getElementById('root'));
```
Esta función toma dos argumentos:
- El componente React a renderizar.
- El elemento HTML destino, generalmente con id "root" o "main"

---

##  Renderizado y Virtual DOM

React no manipula el DOM real directamente; en su lugar:
- Crea una copia virtual del DOM (Virtual DOM).
- Detecta los cambios mediante un proceso llamado Diffing.
- Actualiza solo las partes necesarias del DOM real (Reconciliación).

🔁 Esto hace que React sea mucho más eficiente que la manipulación directa con JavaScript o jQuery.

---

##  Creación de Componentes

### 🔹 Componente de Clase

Los componentes de clase se crean extendiendo React.Component y deben tener un método render().
```jsx
import React from "react";

class ComponentHeader extends React.Component {
  render() {
    return <h1>Bienvenido a React con Componentes de Clase</h1>;
  }
}
export default ComponentHeader;
```

### 🔹 Componente de Función

Los componentes de función son más sencillos y modernos.  
Desde React 16.8 pueden usar hooks como useState o useEffect.
```jsx
function ComponentHeader() {
  return <h1>Hola, soy un componente funcional</h1>;
}
export default ComponentHeader;
```
 Los componentes suelen almacenarse dentro de la carpeta src/components/.

---

##  JSX — JavaScript + XML

JSX es una extensión de JavaScript que permite escribir código similar a HTML dentro de los archivos .js o .jsx.  
Es transpilado a JavaScript puro por Babel antes de ser ejecutado.

**Ejemplo:**
```jsx
const usuario = "Varu";
const element = <h2>Bienvenido {usuario}!</h2>;
```
En JSX:
- Las variables se insertan dentro de { }.
- Se pueden ejecutar expresiones o funciones dentro del JSX.
- Todo debe estar envuelto en un único elemento padre (div o <></>).
- Las etiquetas deben estar cerradas correctamente.

**Ejemplo de bloque JSX con condicional:**
```jsx
const aprobado = true;
return (
  <div>
    {aprobado ? <h3>✅ Aprobado</h3> : <h3>❌ Desaprobado</h3>}
  </div>
);
```

---

##  Renderizado Condicional y Listas

### 🔹 Operador Ternario
```jsx
{condicion ? <h1>Hola</h1> : <p>Adiós</p>}
```

### 🔹 Operador && (AND lógico)
Renderiza solo si la condición es verdadera:
```jsx
{mostrar && <h2>Mostrando contenido</h2>}
```

### 🔹 Bucles con .map()
Permite renderizar listas dinámicas:
```jsx
const estudiantes = ["Sara", "Luis", "Varu"];
return (
  <ul>
    {estudiantes.map((nombre) => (
      <li key={nombre}>{nombre}</li>
    ))}
  </ul>
);
```

---

##  Estilos en Componentes

React permite aplicar estilos de tres maneras:

**Hojas de estilo CSS tradicionales**
```jsx
import "./App.css";
<div className="caja">Hola</div>
```

**Módulos CSS (aislados por componente)**
```jsx
import estilos from "./Card.module.css";
<div className={estilos.contenedor}></div>
```

**Estilos en línea (Inline Style)**
```jsx
<div style={{ color: "blue", backgroundColor: "#eee" }}>Texto</div>
```

---

##  Props y Children

### 🔹 Props

Los props son datos que se pasan de un componente padre a uno hijo.

**Ejemplo:**
```jsx
function Saludo(props) {
  return <h3>Hola, {props.nombre}</h3>;
}

function App() {
  return <Saludo nombre="Varu" />;
}
```

### 🔹 Children

Los children permiten enviar contenido entre etiquetas de un componente.

**Ejemplo:**
```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h4>Título interno</h4>
  <p>Contenido dentro del componente</p>
</Card>
```

---

##  Comunicación entre Componentes

React permite el intercambio de datos entre distintos componentes:

- De padre a hijo: usando props.
- De hijo a padre: usando funciones pasadas como props.
- Entre hermanos: compartiendo el estado en el componente padre.

**Ejemplo (padre-hijo):**
```jsx
function Hijo({ enviarDato }) {
  return <button onClick={() => enviarDato("Hola desde el hijo")}>Enviar</button>;
}

function Padre() {
  const recibirDato = (dato) => alert(dato);
  return <Hijo enviarDato={recibirDato} />;
}
```

---

##  Integración con TailwindCSS

También se revisó cómo aplicar TailwindCSS en proyectos React para un diseño más rápido:

**Pasos principales:**
- Instalar dependencias:
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- Configurar las rutas en tailwind.config.js.
- Agregar las directivas en index.css:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
Esto permite usar clases como:
```jsx
<button className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700">
  Click
</button>
```

---

##  Tarea — Implementación de Componentes en React

Al finalizar la teoría, se dejó una tarea práctica, donde los estudiantes aplicaron los conceptos de componentes, props y comunicación entre ellos.

** Objetivos:**
- Crear una aplicación React responsiva para PC, Tablet y móvil con 7 componentes (uno por sección).  
  Cada componente debía tener su propio diseño en CSS puro.

  ![Sem1](/miportafoliovaru/content/images/semanas/sem1.png)

- Desarrollar 4 componentes anidados (Componente1 → Componente2 → Componente3 → Componente4).

  Se debía pasar un objeto:
  ```js
  { nombre: "Jaime", direccion: "Jr. Junin 450", ciudad: "Huancayo" }
  ```
  desde el Componente1 hasta el Componente4 y mostrarlo en un card.

![Sem2](/miportafoliovaru/content/images/semanas/sem2.png)

- Crear una aplicación con 2 componentes (padre e hijo), donde el hijo enviara datos al padre, y el padre los renderizara en pantalla.

![Sem3](/miportafoliovaru/content/images/semanas/sem3.png)

- Construir 3 componentes (padre y dos hijos), enviando datos del hermano1 al hermano2 mediante el padre.

![Sem4](/miportafoliovaru/content/images/semanas/sem4.png)

- Diseñar una tabla en React que renderice un objeto de 4 estudiantes (id, nombre, ciudad) con estilos en CSS.

![Sem5](/miportafoliovaru/content/images/semanas/sem5.png)

---

##  Habilidades desarrolladas

- Comprensión completa del modelo de componentes en React.
- Uso de JSX para renderizar contenido dinámico.
- Comunicación entre componentes (props, children y funciones).
- Diseño modular y reutilizable de UI.
- Manejo de TailwindCSS y CSS modules para estilos.
- Aplicación de lógica de renderizado condicional y bucles dinámicos.

---

##  Reflexión

**¿Qué aprendí?**  
Aprendí a estructurar aplicaciones React en módulos reutilizables y entender cómo los componentes interactúan entre sí mediante props y estados.  
También comprendí la importancia del Virtual DOM y cómo React optimiza la renderización.

**¿Cómo aprendí?**  
Mediante el análisis teórico, los ejemplos guiados y el desarrollo de la tarea final, que permitió aplicar los conceptos en un entorno real de React.

---

