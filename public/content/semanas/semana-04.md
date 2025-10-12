#  Semana 4 — JavaScript y TypeScript: Programación Dinámica para la Web

##  Temas aprendidos

Durante la **Semana 4** concluyeron las exposiciones de los grupos, con las presentaciones del **Grupo 5** y el **Grupo 6**, que abordaron temas clave del desarrollo web moderno:  
- **JavaScript Básico** (Grupo 5)  
- **JavaScript Avanzado** y **TypeScript** (Grupo 6)

Estas exposiciones marcaron el paso de la estructura estática (HTML y CSS) hacia la **programación dinámica**, dando vida e interactividad a las páginas web.

---

##  JavaScript Básico — Grupo 5

El **Grupo 5** presentó los fundamentos del lenguaje JavaScript, explicando cómo permite agregar lógica, interactividad y control sobre los elementos HTML.

### 🔹 Introducción a JavaScript
JavaScript es un lenguaje de programación interpretado que se ejecuta directamente en el navegador, permitiendo que las páginas respondan a las acciones del usuario.

**Ejemplo:**
```html
<script>
  alert("¡Bienvenido a mi página!");
</script>
```

🔹 Variables y Tipos de Datos  
Se pueden declarar variables con var, let o const.  
Tipos principales: String, Number, Boolean, Array, Object.

```js
let nombre = "Varu";
let edad = 21;
let activo = true;
let numeros = [1, 2, 3];
let persona = { nombre: "Varu", edad: 21 };
```
 ![Varu1](/miportafoliovaru/content/images/semanas/varu1.png)


🔹 Operadores y Condicionales

```js
let nota = 16;

if (nota >= 14) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}
```
También se revisaron los operadores aritméticos, lógicos (&&, ||, !) y de comparación (==, ===, >, <).

![Varu2](/miportafoliovaru/content/images/semanas/varu2.png)

🔹 Bucles (for, while, do while)

```js
for (let i = 1; i <= 5; i++) {
  console.log("Iteración:", i);
}
```
![Varu3](/miportafoliovaru/content/images/semanas/varu3.png)

🔹 Funciones

```js
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Varu"));
```

![Varu4](/miportafoliovaru/content/images/semanas/varu4.png)

🔹 Manipulación del DOM  
El DOM representa la estructura del documento HTML.  
Podemos seleccionar y modificar elementos:

```js
document.getElementById("titulo").innerText = "Texto modificado";
```

![Varu5](/miportafoliovaru/content/images/semanas/varu5.png)

🔹 Eventos y Manejadores  
Permiten responder a acciones del usuario.

```html
<button id="boton">Haz clic</button>
<script>
  document.getElementById("boton").addEventListener("click", () => {
    alert("Botón presionado");
  });
</script>
```
![Varu6](/miportafoliovaru/content/images/semanas/varu6.png)

🔹 JSON y Almacenamiento Local  
Para guardar información en el navegador:

```js
localStorage.setItem("usuario", "Varu");
let user = localStorage.getItem("usuario");
console.log(user);
```

![Varu7](/miportafoliovaru/content/images/semanas/varu7.png)

🔹 Depuración y Uso de la Consola  
El uso de console.log() y debugger facilita el seguimiento del flujo del código.

---

##  JavaScript Avanzado — Grupo 6

El Grupo 6 profundizó en las características avanzadas de JavaScript moderno (ES6+), abordando temas como POO, asincronía, API y optimización.

🔹 Canvas y Gráficos  
Permite dibujar directamente en una página.

```html
<canvas id="miCanvas" width="200" height="100"></canvas>
<script>
  const c = document.getElementById("miCanvas");
  const ctx = c.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(20, 20, 150, 50);
</script>
```
![Ga1](/miportafoliovaru/content/images/semanas/ga1.png)

![Ga2](/miportafoliovaru/content/images/semanas/ga2.png)

🔹 Programación Orientada a Objetos

```js
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}
const varu = new Persona("Varu");
varu.saludar();
```
![Ga3](/miportafoliovaru/content/images/semanas/ga3.png)

🔹 DOM Avanzado y Elementos Dinámicos

```js
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Elemento nuevo";
document.body.appendChild(nuevoDiv);
```
![Ga4](/miportafoliovaru/content/images/semanas/ga4.png)

🔹 Promesas y Async/Await  
Permiten manejar tareas asincrónicas como llamadas a APIs.

```js
async function obtenerDatos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
obtenerDatos();
```

🔹 WebSockets y Comunicación en Tiempo Real  
Permiten enviar y recibir datos sin recargar la página.

🔹 Closures y Scope  
Los closures permiten acceder a variables de un ámbito superior incluso después de haber salido de él.

```js
function contador() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2
```

🔹 Gestión de Errores

```js
try {
  throw new Error("Ocurrió un error");
} catch (error) {
  console.error(error.message);
}
```

🔹 Web Workers y Optimización  
Permiten ejecutar tareas pesadas en segundo plano, sin bloquear la interfaz principal del navegador.

---

##  TypeScript — Grupo 6

El mismo grupo también explicó TypeScript, un superconjunto de JavaScript que agrega tipado estático y mejora la mantenibilidad del código.

🔹 Introducción y Ventajas  
TypeScript permite detectar errores antes de ejecutar el programa, mejorar la productividad y trabajar mejor con proyectos grandes.

```bash
npm install -g typescript
tsc archivo.ts
```

🔹 Tipos de Datos

```ts
let nombre: string = "Varu";
let edad: number = 21;
let activo: boolean = true;
let colores: string[] = ["rojo", "azul"];
let tupla: [string, number] = ["Varu", 21];
enum Rol { Admin, Usuario, Invitado }
```

🔹 Interfaces y Tipos Personalizados

```ts
interface Usuario {
  nombre: string;
  edad: number;
}
let persona: Usuario = { nombre: "Varu", edad: 21 };
```

🔹 Clases y Herencia

```ts
class Animal {
  constructor(public nombre: string) {}
  mover() {
    console.log(`${this.nombre} se mueve`);
  }
}
class Perro extends Animal {
  ladrar() {
    console.log("Guau!");
  }
}
const perro = new Perro("Firulais");
perro.mover();
perro.ladrar();
```

🔹 Funciones Tipadas

```ts
function sumar(a: number, b: number): number {
  return a + b;
}
```

🔹 Genéricos

```ts
function identidad<T>(valor: T): T {
  return valor;
}
console.log(identidad<string>("Hola"));
```

🔹 Manipulación del DOM con TypeScript

```ts
const boton = document.querySelector<HTMLButtonElement>("#btn");
boton?.addEventListener("click", () => console.log("Click detectado"));
```

🔹 Módulos y Namespaces  
Permiten organizar y reutilizar código entre archivos.

```ts
// archivoA.ts
export function saludar() {
  console.log("Hola desde un módulo");
}
// archivoB.ts
import { saludar } from "./archivoA";
saludar();
```

🔹 Manejo de Errores

```ts
try {
  throw new Error("Error controlado en TypeScript");
} catch (e) {
  console.error(e);
}
```

🔹 Integración con Frameworks  
TypeScript se usa ampliamente con React, Angular y Vue, ofreciendo mayor robustez y productividad en el desarrollo.

---

##  Habilidades desarrolladas

- Comprensión del funcionamiento interno de JavaScript.
- Creación de páginas interactivas y dinámicas.
- Uso de APIs, asincronía y POO en el navegador.
- Introducción al tipado estático con TypeScript.
- Mejora de la estructura y mantenimiento del código.
- Aplicación de buenas prácticas y técnicas modernas del desarrollo frontend.

---

##  Ejercicios y prácticas realizadas

Durante las exposiciones, se realizaron ejemplos en vivo y prácticas como:

- Creación de funciones interactivas que respondían a eventos de botones.
- Manipulación del DOM para cambiar colores, textos e imágenes.
- Ejemplo de fetch API consumiendo datos JSON.
- Uso de Canvas para dibujar figuras.
- Ejemplo de clases y herencia en TypeScript.
- Uso de tipos genéricos para crear componentes reutilizables.

---

##  Reflexión

**¿Qué aprendí?**  
Aprendí a dar vida a las páginas web utilizando JavaScript y a estructurar código más limpio y seguro con TypeScript.  
Comprendí cómo los eventos, las funciones y el DOM permiten interactuar con el usuario, y cómo los conceptos avanzados como asincronía o clases amplían el potencial de una aplicación web moderna.

**¿Cómo aprendí?**  
Mediante exposiciones dinámicas, ejemplos prácticos y análisis de código en vivo.  
La combinación entre teoría y práctica permitió entender no solo cómo funciona el código, sino por qué se usa cada herramienta.

---

