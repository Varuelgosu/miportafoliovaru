#  Semana 12 – Desarrollo Backend con PHP, Apache y Laravel

## Resumen de la clase

En la semana 12 se trabajó el desarrollo backend utilizando **PHP**, un lenguaje históricamente muy utilizado para construir aplicaciones web dinámicas. A diferencia de Java (JSP/Spring), PHP destaca por su sencillez, rapidez de configuración y amplia compatibilidad con servidores web. Durante la semana se combinó el uso de **Apache HTTP Server**, la instalación y configuración de PHP en Windows y una introducción al framework **Laravel**, que facilita la creación de aplicaciones modernas siguiendo el patrón MVC.

---

## Apache HTTP Server y Apache Lounge

Se reforzó el uso de **Apache HTTP Server** como servidor web encargado de recibir solicitudes HTTP/HTTPS y devolver respuestas al navegador. Apache:

- Recibe las solicitudes del navegador.  
- Localiza los archivos solicitados.  
- Devuelve el contenido al cliente.

Para entornos Windows se utilizó **Apache Lounge**, una distribución portable útil en contextos académicos por no requerir instalación como servicio.

![Imagen58](/miportafoliovaru/content/images/semanas/varu58.png)

---

##  Instalación y configuración de PHP

Conceptos y pasos clave sobre PHP:

- PHP = Hypertext Preprocessor.  
- Instalación manual en Windows (ZIP): extracción, configuración y ajustes en `php.ini`.  
- Habilitar extensiones comunes: `mysqli`, `pdo_mysql`, `curl`, etc.  
- Agregar PHP al `PATH` del sistema para usar `php` desde la consola.  
- Verificar instalación:
```bash
php -v
```
Se explicó que el servidor procesa el código PHP y envía al cliente únicamente HTML resultante, sin exponer el código fuente.


---

## Composer: gestor de dependencias en PHP

Se introdujo **Composer**, la herramienta estándar para gestionar dependencias en PHP. Composer permite:

- Instalar librerías por proyecto.  
- Gestionar versiones.  
- Facilitar el uso de frameworks como Laravel.

Verificación:
```bash
composer -V
```

Composer cumple un rol análogo a Maven (Java) o npm (JavaScript).



---

##  Fundamentos del lenguaje PHP

Se repasaron los conceptos básicos necesarios para backend en PHP:

- Etiqueta básica: `<?php ?>`  
- Variables y tipos.  
- Estructuras condicionales: `if`, `switch`.  
- Bucles: `for`, `while`, `foreach`.  
- Inclusión de archivos: `include`, `require`.  
- Funciones y manejo de errores.  
- Terminadores de ejecución: `exit`, `die`.

Estos fundamentos permiten generar páginas dinámicas y procesar formularios en el servidor.

![Imagen57](/miportafoliovaru/content/images/semanas/varu57.png)

---

## Introducción al framework Laravel

Se presentó **Laravel** como un framework moderno de PHP que sigue el patrón Modelo–Vista–Controlador (MVC) y que acelera el desarrollo de aplicaciones profesionales.

Componentes y conceptos principales de Laravel:

- Rutas (`routes`)  
- Controladores (`Controllers`)  
- Vistas con Blade (`resources/views`)  
- ORM Eloquent (modelos y relaciones)  
- Middleware (filtros y seguridad)  
- Migraciones y seeders (gestión de base de datos)  
- Artisan (CLI para tareas comunes)

Enlaces oficiales:
- Sitio: [https://laravel.com/](https://laravel.com/)  
- Documentación (ejemplo para versión 12.x): [https://laravel.com/docs/12.x](https://laravel.com/docs/12.x)

![Imagen55](/miportafoliovaru/content/images/semanas/varu55.png)

![Imagen56](/miportafoliovaru/content/images/semanas/varu46.png)

---

##  Instalación y estructura de un proyecto Laravel

Creación de proyectos con Composer y Artisan, y estructura típica:

- `app/` — lógica de negocio (models, controllers, services).  
- `routes/` — definición de rutas.  
- `resources/` — vistas (Blade), assets y plantillas.  
- `database/` — migraciones y seeders.  
- `public/` — punto de entrada público (index.php).  
- `vendor/` — dependencias gestionadas por Composer.

Esta organización favorece proyectos ordenados y mantenibles.

![Imagen54](/miportafoliovaru/content/images/semanas/varu54.png)

---

##  Reflexión personal

La semana 12 ofreció una visión completa del backend desde la perspectiva de PHP y Laravel. Se evidenció cómo un framework bien diseñado puede simplificar tareas complejas, imponer buenas prácticas y acelerar la construcción de aplicaciones escalables. Complementó lo aprendido en Java (JSP/Spring), ampliando la comprensión de opciones y enfoques disponibles en el desarrollo backend moderno.