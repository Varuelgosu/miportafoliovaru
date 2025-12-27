#  Semana 10 – Desarrollo Backend con JSP y Apache Tomcat

## Resumen de la clase

En la semana 10 se profundizó en el desarrollo backend utilizando Java Server Pages (JSP) sobre el servidor Apache Tomcat, entendiendo cómo Java puede ser utilizado directamente para construir aplicaciones web dinámicas del lado del servidor.

Se aprendió que JSP permite incrustar código Java dentro de páginas HTML, lo cual facilita la generación de contenido dinámico sin depender inicialmente de frameworks más complejos. 
---

## Apache Tomcat como servidor web Java

Se reforzó el uso de Apache Tomcat como contenedor de servlets y motor JSP. Tomcat:

- Recibe solicitudes HTTP desde el navegador.  
- Procesa páginas JSP convirtiéndolas en servlets Java.  
- Ejecuta el código Java generado.  
- Devuelve HTML dinámico al cliente.

Estructura de directorios importante:
- `bin` (ejecución del servidor)  
- `conf` (configuración)  
- `logs` (registros)  
- `webapps` (aplicaciones web)  
- `work` y `temp` (archivos temporales)

![Imagen37](/miportafoliovaru/content/images/semanas/varu37.png)

---

## 🔹 Gestión de proyectos con Maven

Maven se presentó como gestor de dependencias y ciclo de vida para proyectos Java. Sus funciones principales:

- Administrar librerías automáticamente.  
- Definir la estructura del proyecto.  
- Controlar el ciclo de vida (compilar, testear, empaquetar, desplegar).  
- Facilitar la compilación y el despliegue mediante `pom.xml`.

![Imagen38](/miportafoliovaru/content/images/semanas/varu38.png)

---

##  Introducción a Jakarta Server Pages (JSP)

JSP es una tecnología del lado servidor que permite construir páginas dinámicas usando Java. Puntos clave:

- JSP se ejecuta en el servidor y requiere un contenedor JSP (por ejemplo, Tomcat).  
- Tiene acceso completo a las APIs de Java, incluyendo JDBC para acceso a bases de datos.  
- El servidor traduce el archivo JSP a un servlet Java, lo compila y lo ejecuta automáticamente.

![Imagen39](/miportafoliovaru/content/images/semanas/varu39.png)

---

##  Sintaxis básica de JSP

Principales elementos trabajados:

- Scriptlets: `<% /* código Java */ %>` — ejecutar código Java inline.  
- Declaraciones: `<%! /* variables y métodos */ %>` — definir members del servlet generado.  
- Expresiones: `<%= /* expresión para imprimir */ %>` — insertar valores en HTML.  
- Directivas: `<%@ page language="java" %>` — configurar la página.  
- Objetos implícitos: `request`, `response`, `session`, `out`, `application`, etc.

Ejemplo simple:
```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%
    String nombre = request.getParameter("nombre");
%>
<html>
  <body>
    Hola, <%= (nombre != null) ? nombre : "invitado" %>!
  </body>
</html>
```


---

##  Modelo MVC con JSP

Se aplicó el patrón MVC usando JSP y servlets:

- Vista: páginas JSP.  
- Controlador: servlets que manejan la lógica de la solicitud.  
- Modelo: objetos Java o capas de acceso a datos.

Este enfoque ayuda a separar responsabilidades y mantener el código más organizado, incluso sin frameworks adicionales.

![Imagen40](/miportafoliovaru/content/images/semanas/varu40.png)

---

## Práctica desarrollada: CRUD de Estudiante con JSP y Tomcat

Actividad práctica: construir un CRUD de la entidad Estudiante usando JSP y Tomcat. Logros:

- Formularios JSP para crear estudiantes.  
- Listados dinámicos de estudiantes.  
- Editar y eliminar registros.  
- Procesamiento de datos con métodos `GET` y `POST`.  
- Uso de objetos implícitos (`request`, `session`, `out`).  
- Despliegue y ejecución en Tomcat.

Parte principal del Crud

![Imagen41](/miportafoliovaru/content/images/semanas/varu41.png)

Parte LISTAR del Crud

![Imagen42](/miportafoliovaru/content/images/semanas/varu42.png)

Parte AGREGAR del Crud

![Imagen43](/miportafoliovaru/content/images/semanas/varu43.png)

Parte BUSCAR del Crud

![Imagen44](/miportafoliovaru/content/images/semanas/varu44.png)

BD MySQL conectada a nuestro a Crud

![Imagen45](/miportafoliovaru/content/images/semanas/varu45.png)

---

##  Reflexión personal

La semana permitió comprender el backend Java en su forma más directa: JSP + Tomcat. El ejercicio CRUD mostró el flujo completo desde la interacción del usuario hasta la respuesta generada por el servidor, estableciendo una buena base para abordar frameworks más avanzados como Spring y Spring Boot en el futuro.