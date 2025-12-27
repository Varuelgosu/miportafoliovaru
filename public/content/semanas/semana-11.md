# Semana 11 – Desarrollo Backend con Spring Framework y Spring Boot

## Resumen de la clase

En la semana 11 se introdujo el framework **Spring**, una de las tecnologías más importantes y utilizadas para el desarrollo de aplicaciones backend empresariales en Java. A diferencia del uso directo de JSP, Spring permite construir aplicaciones más modulares, escalables y organizadas, separando claramente responsabilidades y reduciendo la complejidad del código.

---

## Spring Framework

Spring Framework es un framework robusto para el desarrollo de aplicaciones empresariales en Java, diseñado para estandarizar el trabajo, reducir el acoplamiento entre componentes y facilitar el mantenimiento del software.

Entre sus principales objetivos se encuentran:

- Simplificar la creación de aplicaciones Java.  
- Gestionar automáticamente los objetos del sistema.  
- Separar la lógica de negocio de la infraestructura.  
- Facilitar la integración con bases de datos y servidores web.

Spring introduce el concepto de que el framework controla el flujo de la aplicación, y no el programador directamente.

![Imagen46](/miportafoliovaru/content/images/semanas/varu46.png)
---

## Inversión de Control (IoC)

Uno de los conceptos más importantes aprendidos fue la **Inversión de Control (IoC)**.  
Este principio indica que el control de creación y gestión de objetos ya no depende del programador, sino del framework Spring.

Antes:
- El programador creaba manualmente los objetos (`new Clase()`).

Ahora con Spring:
- Spring crea, configura y administra los objetos automáticamente.

Beneficios:
- Menor acoplamiento.  
- Mayor reutilización de código.  
- Mejor organización del proyecto.

---

##  Spring Container

Se estudió el **Spring Container**, que es el núcleo del framework.  
Este contenedor se encarga de:

- Crear los objetos (beans).  
- Configurarlos.  
- Relacionarlos entre sí.  
- Gestionar su ciclo de vida.

Los objetos administrados por Spring se denominan *Beans*, y suelen definirse mediante:
- Archivos de configuración (XML)  
- Anotaciones (p. ej. `@Component`, `@Service`, `@Repository`, `@Configuration`)

---

##  Spring Boot

Posteriormente se introdujo **Spring Boot**, una herramienta que simplifica enormemente el uso de Spring Framework.

Spring Boot permite:
- Crear proyectos Spring rápidamente.  
- Evitar configuraciones manuales complejas.  
- Incluir un servidor embebido (por ejemplo, Tomcat).  
- Facilitar el despliegue de aplicaciones.

Características destacadas:
- Configuración automática.  
- Servidor incorporado.  
- Menor dependencia de archivos XML.  
- Enfoque en productividad.

![Imagen49](/miportafoliovaru/content/images/semanas/varu49.png)

---

## Creación de proyectos con Spring Initializr

Se aprendió a crear proyectos Spring Boot usando **Spring Initializr**, una herramienta web oficial que genera la estructura base del proyecto.

Link oficial de Spring Initializr: [https://start.spring.io/](https://start.spring.io/)

Esta interfaz permite:
- Elegir el tipo de proyecto (Maven o Gradle).  
- Seleccionar la versión de Java.  
- Agregar dependencias (Spring Web, JPA, MySQL, etc.).  
- Descargar el proyecto listo para usar.

![Imagen47](/miportafoliovaru/content/images/semanas/varu47.png)

---

## 🔹 Desarrollo de APIs REST con Spring

Uno de los enfoques principales de la semana fue el desarrollo de **APIs RESTful** usando Spring.  
Se trabajó con una arquitectura organizada en paquetes como:

- `controllers`  
- `models`  
- `repositories`  
- `services`

Se aprendió a:
- Crear controladores REST (`@RestController`).  
- Definir endpoints (`@GetMapping`, `@PostMapping`, etc.).  
- Procesar solicitudes HTTP.  
- Retornar datos en formato JSON.  
- Conectar con bases de datos usando JPA / Spring Data JPA.

![Imagen48](/miportafoliovaru/content/images/semanas/varu48.png)

---

## Tarea del docente: Desarrollo de API RESTful – Docente

Como actividad final, se propuso desarrollar una API RESTful para la gestión de la entidad **Docente**, utilizando Jakarta EE, Spring y MySQL.

La API debía implementar operaciones CRUD completas, incluyendo:
- Registrar docentes.  
- Listar docentes.  
- Buscar por ID.  
- Actualizar información.  
- Eliminar registros.  
- Filtros por ciudad y años de servicio.  
- Cálculo de edad promedio.  
- Validaciones de datos.  
- Paginación.  
- Documentación con Swagger.  
- Pruebas mediante Postman.

Esta tarea permitió aplicar de manera práctica todos los conceptos vistos sobre Spring, Spring Boot y desarrollo de servicios REST.

CÓDIGO DE EN JAVA DE LA APLICACIÓN

![Imagen50](/miportafoliovaru/content/images/semanas/varu50.png)

PRUEBAS DE LA API EN POSTMAN

![Imagen51](/miportafoliovaru/content/images/semanas/varu51.png)

BD EN MYSQL CORRIENDO LA APIDOCENTES

![Imagen52](/miportafoliovaru/content/images/semanas/varu52.png)

PRUEBA DEL SWAGGER FUNCIONAL

![Imagen53](/miportafoliovaru/content/images/semanas/varu53.png)

---

##  Reflexión personal

La semana 11 marcó un paso importante hacia el desarrollo backend profesional, ya que **Spring** y **Spring Boot** son herramientas ampliamente usadas en entornos reales. Aprender a crear APIs RESTful permitió comprender cómo los sistemas modernos intercambian información y cómo el backend puede ser independiente del frontend.

Esta base resulta fundamental para proyectos más grandes y para el desarrollo de sistemas empresariales escalables.