# Semana 13 – Revisión y consolidación de la práctica Backend con PHP y Laravel

## Resumen de la semana

En la semana 13 se realizó la revisión integral de la práctica desarrollada en la semana anterior, consistente en la creación de una aplicación backend con **PHP**, **Apache HTTP Server** y **Laravel**. 

---

##  Revisión del entorno de desarrollo

Se verificó que el entorno de desarrollo estuviera correctamente configurado, comprobando:

- El correcto funcionamiento del servidor Apache.  
- La integración adecuada de PHP con Apache.  
- La ejecución del proyecto Laravel mediante Artisan (`php artisan serve` o despliegue en Apache).  
- La conexión establecida con la base de datos MySQL (credenciales en `.env`).

Esta comprobación confirmó que la aplicación se ejecuta sin errores y que el entorno local es adecuado para el desarrollo backend.

npm run dev

![Imagen61](/miportafoliovaru/content/images/semanas/varu61.png)

php artisan serve

![Imagen62](/miportafoliovaru/content/images/semanas/varu62.png)

---

## Validación de la estructura del proyecto Laravel

Se revisó que cada componente del proyecto estuviera en la carpeta correcta y cumpliera su función dentro del patrón MVC:

- Rutas definidas para el formulario y el registro de datos (`routes/web.php` o `routes/api.php`).  
- Controlador encargado de procesar la información del estudiante (`app/Http/Controllers/*Controller.php`).  
- Modelo Eloquent y su relación con la base de datos (`app/Models/Estudiante.php`).  
- Migración utilizada para crear la tabla correspondiente (`database/migrations/*_create_estudiantes_table.php`).  
- Vista Blade utilizada como interfaz del formulario (`resources/views/*.blade.php`).

Esta revisión reforzó la importancia del orden y la organización del código en proyectos reales.

![Imagen60](/miportafoliovaru/content/images/semanas/varu60.png)

---

## Comprobación del flujo de datos

Se validó el flujo completo desde que el usuario envía información en el formulario hasta que se almacena en la base de datos:

1. El formulario envía los datos al controlador (método POST).  
2. El controlador recibe y procesa los datos (`Request`).  
3. El modelo Eloquent persiste la información en la base de datos.  
4. La base de datos refleja los registros creados.  
5. El sistema muestra mensajes de confirmación o redirecciones al usuario.

Se verificó que los datos llegaran correctamente y que se mostraran confirmaciones apropiadas.

---


##  Resultados de la práctica

Al finalizar la revisión, la práctica quedó completamente funcional:

- Registro de estudiantes desde la interfaz web.  
- Almacenamiento correcto en la base de datos.  
- Listado, edición y eliminación operativos (si correspondía).  
- Validaciones y mensajes de usuario implementados.

Se incluirán capturas del resultado final mostrando el formulario, el registro de datos y la ejecución correcta del sistema.

![Imagen59](/miportafoliovaru/content/images/semanas/varu59.png)

---

## Reflexión personal

La semana 13 fue clave para consolidar los conocimientos en **PHP** y **Laravel**. La revisión y depuración demostraron que el desarrollo backend no solo implica escribir código, sino también revisar, mejorar y aplicar buenas prácticas. Esta experiencia fortaleció la comprensión del flujo completo de una aplicación web y la importancia de mantener un proyecto ordenado y confiable.