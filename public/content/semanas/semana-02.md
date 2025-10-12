# Semana 2 — Estructura y Estilos en la Web

## 🧠 Temas aprendidos

Durante esta semana se realizaron **exposiciones por grupos** sobre los temas fundamentales del desarrollo web.  
Los **grupos 1 y 2** expusieron temas de **HTML (básico y avanzado)**, mientras que los **grupos 3 y 4** abordaron **CSS (básico y avanzado)** y **Bootstrap**.

Las exposiciones combinaron teoría, práctica y demostraciones en código real.

---

## 📘 HTML Básico

El **HTML (HyperText Markup Language)** es el lenguaje que define la estructura del contenido de una página web.
 
![Imagen6](/content/images/semanas/imagen6.png)

### 🔹 Estructura básica de un documento HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi primera página</title>
</head>
<body>
  <h1>¡Hola, mundo!</h1>
  <p>Esta es mi primera página web.</p>
</body>
</html>
```

🔹 Etiquetas principales

- `<html>` → raíz del documento
- `<head>` → contiene metadatos (título, enlaces, scripts)
- `<body>` → contiene el contenido visible de la página

🔹 Formateo de texto

Podemos cambiar la forma en que se muestra el texto con etiquetas de formato:

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<p>Este es un párrafo con <strong>texto en negrita</strong> y <em>texto en cursiva</em>.</p>
<hr>
<br>
```

🔹 Listas, imágenes y enlaces

```html
<h3>Listas</h3>
<ul>
  <li>Elemento de lista desordenada</li>
  <li>Otro elemento</li>
</ul>

<ol>
  <li>Primer paso</li>
  <li>Segundo paso</li>
</ol>

<h3>Imágenes y enlaces</h3>
<img src="/markdown/img/imagen1.png" alt="Ejemplo de imagen" width="350" />

<p>Visita mi sitio en 
<a href="https://github.com/" target="_blank">GitHub</a>.</p>
```

🔹 Tablas y formularios básicos

```html
<h3>Ejemplo de tabla</h3>
<table border="1">
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
  </tr>
  <tr>
    <td>Varu</td>
    <td>21</td>
  </tr>
</table>

<h3>Formulario básico</h3>
<form>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" />
  <input type="submit" value="Enviar" />
</form>
```

---

## 🚀 HTML Avanzado

Los grupos explicaron también funcionalidades avanzadas de HTML5, esenciales para construir aplicaciones modernas.

![Imagen7](/content/images/semanas/imagen7.png)
🔹 Elementos y atributos globales

```html
<div id="contenedor" class="caja" data-info="ejemplo">
  <p title="Este es un párrafo con atributo title">Texto dentro de un div.</p>
</div>
```

🔹 Multimedia y gráficos

```html
<video controls width="400">
  <source src="/markdown/img/video.mp4" type="video/mp4">
  Tu navegador no soporta videos.
</video>

<canvas id="miCanvas" width="200" height="100" style="border:1px solid #ccc;"></canvas>
```

🔹 Formularios avanzados

```html
<form>
  <label for="correo">Correo:</label>
  <input type="email" id="correo" name="correo" required />
  
  <label for="rango">Nivel de satisfacción:</label>
  <input type="range" id="rango" min="0" max="10" />
  
  <input type="submit" value="Enviar" />
</form>
```
![Imagen8](/content/images/semanas/imagen8.png)

🔹 APIs de HTML5

- **Drag and Drop** – arrastrar y soltar elementos
- **GeoLocation** – obtener ubicación del usuario
- **Web Storage** – guardar datos localmente con localStorage o sessionStorage

```html
<script>
  localStorage.setItem("usuario", "Varu");
  const nombre = localStorage.getItem("usuario");
  console.log("Usuario guardado:", nombre);
</script>
```

---

## 🎨 CSS Básico

Los grupos siguientes presentaron hojas de estilo en cascada (CSS), encargadas de dar forma y color a la estructura HTML.

🔹 Ejemplo simple de estilos

```html
<style>
  body {
    background-color: #0a0014;
    color: white;
    font-family: 'Poppins', sans-serif;
  }
  h1 {
    color: #7f00ff;
    text-align: center;
  }
  p {
    text-align: justify;
  }
</style>

<h1>Estilos básicos</h1>
<p>CSS controla el diseño y la apariencia visual de las páginas web.</p>
```

🔹 Box Model y posicionamiento

Cada elemento HTML se comporta como una “caja” con margen, borde, padding y contenido.
También se abordaron los tipos de posicionamiento: static, relative, absolute, fixed y sticky.

```css
.caja {
  width: 200px;
  height: 100px;
  background: #00bfff;
  border: 2px solid #7f00ff;
  margin: 20px;
  padding: 10px;
}
```

---

## 💎 CSS Avanzado

Los temas avanzados incluyeron propiedades modernas, diseño flexible y efectos visuales.

🔹 Flexbox

```css
.contenedor {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
```

🔹 Grid Layout

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

🔹 Variables y funciones CSS

```css
:root {
  --principal: #7f00ff;
  --fondo: #0a0014;
}

.card {
  background: var(--fondo);
  color: var(--principal);
  padding: clamp(10px, 2vw, 30px);
}
```

---

## 💠 Bootstrap y Tailwind CSS

El Grupo 4 expuso sobre Bootstrap y Tailwind, frameworks que facilitan el diseño responsivo y moderno.

🔹 Ejemplo con Bootstrap

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

<div class="container text-center">
  <div class="row">
    <div class="col-md-4"><div class="p-3 bg-primary text-white">Columna 1</div></div>
    <div class="col-md-4"><div class="p-3 bg-secondary text-white">Columna 2</div></div>
    <div class="col-md-4"><div class="p-3 bg-success text-white">Columna 3</div></div>
  </div>
</div>
```

🔹 Ejemplo con Tailwind CSS

```html
<div class="flex flex-col md:flex-row gap-4 p-4 bg-gradient-to-r from-purple-700 to-blue-500 text-white">
  <div class="flex-1 p-4 bg-purple-600 rounded-2xl">Sección 1</div>
  <div class="flex-1 p-4 bg-blue-600 rounded-2xl">Sección 2</div>
</div>
```

Estos frameworks permiten desarrollar interfaces modernas sin escribir tanto CSS desde cero.

---

## 🧪 Ejercicios de laboratorio

Durante esta semana se realizaron prácticas como:

- Creación de páginas HTML con encabezados, listas, enlaces e imágenes.
- Diseño de una tabla de datos con estilos CSS.
- Implementación de un formulario de contacto.
- Ejercicios con el sistema Grid de Bootstrap.
- Experimentación con clases utilitarias de Tailwind.

📸 Ejemplo visual:
```html
<img src="/markdown/img/imagen1.png" alt="Ejemplo HTML y CSS" width="400" style="display:block;margin:1rem auto;border-radius:12px;" />
```

🔹 1. Página HTML con encabezados, listas, enlaces e imágenes

![Html1](/content/images/semanas/html1.png)
![Html2](/content/images/semanas/html2.png)

🔹 2. Tabla de datos con estilos CSS básicos

![Html3](/content/images/semanas/html3.png)

🔹 3. Formulario de contacto básico

![Html4](/content/images/semanas/html4.png)

🔹 4. Ejercicios con Bootstrap Grid

![Html5](/content/images/semanas/html5.png)
![Html6](/content/images/semanas/html6.png)

🔹 5. Experimentación con clases utilitarias de Tailwind

![Html7](/content/images/semanas/html7.png)
![Html8](/content/images/semanas/html8.png)
![Html9](/content/images/semanas/html9.png)

---

## 💭 Reflexión

**¿Qué aprendí?**  
Aprendí los fundamentos de la estructura y diseño web. Comprendí cómo HTML organiza el contenido y cómo CSS define su presentación.  
También vi el poder de frameworks como Bootstrap y Tailwind, que aceleran el desarrollo visual y mantienen coherencia en el diseño.

**¿Cómo aprendí?**  
Mediante las exposiciones de los grupos y las prácticas guiadas.  
Reforcé los conceptos construyendo ejemplos reales, probando estilos en Visual Studio Code y explorando el funcionamiento de las etiquetas y clases.