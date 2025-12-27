#  Semana 09 – Arquitecturas Web, Servidores y Entorno Backend

##  Resumen de la clase

En la semana 9 se estudiaron los conceptos básicos del desarrollo backend y la infraestructura que permite que una aplicación web funcione correctamente. Se comprendió que una aplicación web no depende solo de su apariencia visual, sino principalmente de la arquitectura, los servidores, la configuración y las tecnologías del lado del servidor.

Uno de los aprendizajes más importantes fue entender el funcionamiento de la arquitectura cliente–servidor, donde el navegador del usuario actúa como cliente realizando solicitudes, y el servidor se encarga de procesarlas, interactuar con la base de datos y devolver una respuesta adecuada al usuario.
---

## Tipos de arquitecturas web

Se estudiaron diferentes modelos de arquitectura, cada uno con características y usos específicos:

- **Arquitectura Cliente/Servidor Clásica (MPA)**  
  Cada página es independiente y se recarga completamente al navegar. Es común en sitios tradicionales desarrollados con HTML y PHP.

- **Arquitectura Multicapa**  
  Separa el sistema en capas como presentación, lógica de negocio y datos, facilitando el mantenimiento y la escalabilidad. Aquí se introduce el modelo MVC.

- **Single Page Application (SPA)**  
  El navegador carga una sola página HTML y la navegación se realiza mediante JavaScript, solicitando solo datos al servidor. Mejora la experiencia del usuario y es usado por frameworks modernos como React.

- **Arquitecturas híbridas (MPA + SPA)**  
  Combinan lo mejor de ambos enfoques, como ocurre con frameworks tipo Next.js.

- **Arquitectura Hexagonal**  
  Permite separar el núcleo del sistema de sus dependencias externas, haciendo que el sistema sea más flexible, testeable y mantenible.

![Imagen30](/miportafoliovaru/content/images/semanas/varu30.png)

---

##  Servidores web y hosting

Un servidor web es un equipo (físico o virtual) que almacena los archivos de un sistema web y los entrega a los usuarios mediante el protocolo HTTP.

Servidores y tecnologías comunes:
- Apache HTTP Server
- NGINX
- Apache Tomcat
- IIS

Tipos de hosting:
- Hosting compartido
- VPS
- Hosting dedicado
- Hosting en la nube

Se introdujo el concepto de **Cloud Computing**, donde los recursos se consumen bajo demanda, permitiendo escalabilidad y pago por uso.

![Imagen31](/miportafoliovaru/content/images/semanas/varu31.png)

---

##  Administración y configuración de servidores

No basta con tener un servidor; es necesario configurarlo correctamente. Se revisaron parámetros importantes como:

- `DocumentRoot`
- Puertos de escucha (80, 443, 8080)
- `ServerName`
- Archivos por defecto (`index.html`, `index.jsp`)
- Manejo de errores
- Configuración SSL

Se analizó la configuración específica de Apache HTTP Server y Apache Tomcat, identificando archivos principales como `httpd.conf` y `server.xml`.

![Imagen32](/miportafoliovaru/content/images/semanas/varu32.png)

---

## Funcionamiento del Server Side

Flujo típico de una petición web:

1. El usuario realiza una solicitud desde el navegador.  
2. El servidor recibe la petición.  
3. Se ejecuta código backend (PHP, Java, Python, etc.).  
4. Se consulta la base de datos.  
5. El servidor genera una respuesta.  
6. El navegador muestra el resultado.

Este proceso permite entender el rol del backend y cómo se conecta con la base de datos y el frontend.

![Imagen33](/miportafoliovaru/content/images/semanas/varu33.png)

---

## Apache Tomcat y proyectos Java Web

![Imagen34](/miportafoliovaru/content/images/semanas/varu34.png)

Se estudió Apache Tomcat como servidor especializado en aplicaciones Java:

- Estructura de carpetas de Tomcat.  
- Módulos internos y su rol.  
- Manejo de aplicaciones JSP.  
- Uso del puerto 8080.

Tomcat actúa como contenedor de servlets y transforma las páginas JSP en código Java ejecutable.

![Imagen35](/miportafoliovaru/content/images/semanas/varu35.png)

---

## Gestión de dependencias con Maven

Maven fue presentado como herramienta fundamental para proyectos Java. Puntos clave:

- Automatiza la descarga de dependencias.  
- Gestiona el ciclo de vida del proyecto.  
- Facilita la compilación y despliegue.  
- Utiliza el archivo `pom.xml` como núcleo del proyecto.

Comandos básicos revisados:
```bash
mvn compile
mvn package
mvn install
mvn deploy
```

---

## Ejercicio en clase

Se realizó la correcta instalación de tomcat.

![Imagen36](/miportafoliovaru/content/images/semanas/varu36.png)

---

##  Reflexión personal

Esta semana fue clave para comprender que el desarrollo web profesional no solo consiste en escribir código, sino en entender la infraestructura, la arquitectura y el entorno donde se ejecuta una aplicación. Aprender sobre servidores, arquitecturas y herramientas como Tomcat y Maven permitió tener una visión más completa del backend y su importancia dentro de un sistema web moderno.