# Semana 08 – Examen Parcial: Sistema de Certificación en Línea

##  Resumen ejecutivo
Breve: En la semana 8 se desarrolló un examen parcial práctico que consistió en diseñar e implementar un sistema frontend de certificación profesional usando React, Vite y TypeScript con persistencia en Local Storage. El sistema simula la gestión de exámenes por un comité técnico, la rendición por usuarios, la generación de certificados digitales (PDF con URL pública) y un currículum digital vinculable a las certificaciones.

---

## Contexto del parcial

El examen parcial tuvo como objetivo diseñar e implementar un sistema de certificación en línea que modelara procesos reales de evaluación y acreditación profesional. Más allá de programar, se buscó entender y representar flujos reales de certificación: creación de exámenes, rendición, evaluación, emisión de certificados y construcción de un perfil profesional.

La implementación usó:
- React + Vite + TypeScript para el frontend.  
- Local Storage para persistencia (sin backend).  

---

## Descripción general del sistema

El sistema simula una plataforma de certificación con dos actores principales:
- Comité técnico: crea y administra exámenes.  
- Usuarios: rinden evaluaciones, obtienen certificados digitales y construyen su currículum en línea.

Funcionalidades clave:
- Creación y gestión de exámenes (título, área, tipo).  
- Rendición de exámenes y evaluación automática.  
- Generación y consulta de certificados digitales en PDF con URL pública.  
- Gestión de usuarios y currículum digital vinculado a certificaciones.

---

##  Gestión y edición de exámenes por el comité técnico

Módulo exclusivo para el comité técnico que permite:
- Crear nuevos exámenes (título, área temática, tipo de evaluación).  
- Agregar, editar y eliminar preguntas.  
- Definir criterios de aprobación (porcentaje mínimo).  
- Persistir exámenes en Local Storage.

Este módulo integró buenas prácticas de componentización en React, separación de responsabilidades y validaciones básicas para garantizar una interfaz clara y funcional.

---

## Rendición de exámenes por los usuarios

Interfaz para que los usuarios:
- Seleccionen un examen habilitado.  
- Respondan preguntas (opción múltiple o abiertas).  
- Obtengan el puntaje final automáticamente.  
- Visualicen si aprobaron o no.  
- Guarden respuestas y resultados en Local Storage.

Se incluyeron controles como:
- Intento único por usuario (control básico).  
- Evaluación automática para preguntas de opción múltiple.

---

## Generación de certificados digitales con URL pública

Al aprobar un examen, el sistema genera un certificado PDF que contiene:
- Nombre del usuario.  
- Nombre del examen aprobado.  
- Fecha de emisión.  
- Código único / hash de validación.  
- URL pública para visualizar el certificado.

Los certificados se almacenan en Local Storage y se exponen mediante una URL simulada, permitiendo consulta pública y verificación básica.

---

## Gestión de usuarios registrados

Módulo para usuarios que incluye:
- Registro con datos personales y validaciones para evitar duplicados.  
- Autenticación básica (simulada en frontend).  
- Listado de usuarios registrados.  
- Asociación entre usuarios, exámenes rendidos y certificados obtenidos.

Esta parte reforzó el modelado de relaciones entre entidades aun en un entorno sin backend real.

---

## Currículum digital vinculado a certificaciones

Cada usuario cuenta con un currículum digital que muestra:
- Información personal básica.  
- Certificaciones obtenidas con enlaces a sus URLs públicas.  
- Experiencia laboral y formación editable por el usuario.  
- URL única para el currículum (simulada).

Esto simula una plataforma profesional donde las certificaciones respaldan el perfil del usuario.

---

## Resultados del parcial

El sistema cumple los requisitos del examen parcial:
- Gestión completa de exámenes.  
- Evaluación automática y control de intentos.  
- Emisión de certificados digitales con URL pública.  
- Gestión de usuarios y perfil profesional (currículum).  

La práctica demostró habilidades técnicas en React + TypeScript y diseño de soluciones alineadas a procesos reales de certificación.

RESULTADO DEL SISTEMA

![Imagen71](/miportafoliovaru/content/images/semanas/varu71.png)

---

##  Reflexión final

El examen permitió demostrar capacidad para diseñar una aplicación frontend estructurada y funcional que modela procesos reales de certificación profesional. Aun sin backend, la solución con Local Storage mostró cómo representar entidades, relaciones y flujos de trabajo completos. La experiencia integró diseño de interfaces, validaciones, persistencia cliente y generación de artefactos verificables (certificados) simulando un entorno profesional.