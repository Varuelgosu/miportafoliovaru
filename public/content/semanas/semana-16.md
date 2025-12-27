# Semana 16 – Examen Parcial: Desarrollo de una Aplicación Web Inteligente

## Contexto del examen

En la semana 16 se realizó el examen parcial/final del curso, que consistió en construir una aplicación web inteligente completa integrando backend, frontend, base de datos, seguridad e inteligencia artificial. El objetivo fue demostrar la capacidad de integrar un modelo real de IA dentro de una arquitectura web funcional, y no solo ejemplos aislados.

El sistema desarrollado, llamado **TextoClaro**, cumple los requisitos del examen y representa la consolidación práctica de los conocimientos del curso.

---

## Descripción general del sistema

**TextoClaro** es una aplicación web inteligente para el análisis automatizado de textos en español. Permite que los usuarios se registren, inicien sesión de forma segura y envíen textos para ser analizados por un modelo de IA. Los resultados (principalmente resúmenes) se muestran en un dashboard protegido.

En resumen, el sistema:
- Gestiona usuarios con autenticación segura.  
- Procesa texto usando inteligencia artificial real.  
- Muestra resultados en una interfaz web moderna y protegida.

---

##  Backend del sistema (Flask + MySQL + IA)

El backend está desarrollado en **Python** con **Flask**, exponiendo una API REST con las rutas exigidas:

- `POST /register`  
  Registra nuevos usuarios, valida datos y almacena la información en MySQL con la contraseña cifrada.

- `POST /login`  
  Verifica credenciales y genera un token JWT para acceder a rutas protegidas.

- `GET /profile`  
  Ruta protegida que valida el token JWT y permite acceder al dashboard.

- `POST /analyze-text`  
  Ruta protegida que recibe texto en español y devuelve el resultado del modelo de IA.

Además, el backend:
- Valida datos de entrada.  
- Protege endpoints mediante JWT.  
- Gestiona errores y responde en JSON.  
- Controla el acceso al motor de IA.

---

## Modelo de Inteligencia Artificial utilizado

Para el componente de IA se integró un motor basado en **Spark NLP**, reutilizando pipelines preentrenados para español. El enfoque principal fue el resumen automático de texto (opción permitida en el examen).

Características del motor de IA:
- No entrena modelos desde cero; reutiliza modelos validados.  
- Se inicializa una sola vez para evitar lentitud y errores.  
- Procesa el texto y devuelve resúmenes coherentes.

Este enfoque mostró una integración real de IA dentro de una arquitectura web académica y reproducible.

---

##  Frontend del sistema (React + HTML + CSS + JS)

El frontend fue desarrollado con **React** e incluye componentes principales:

- Registro de usuario  
  Formulario para crear una cuenta.

- Inicio de sesión  
  Autenticación y obtención del token JWT.

- Dashboard protegido  
  Accesible solo con token válido.

- Área de análisis  
  Textarea para que el usuario ingrese el texto a analizar.

- Visualización de resultados  
  Muestra el resumen generado por la IA de forma clara y legible.

El token JWT se almacena en el navegador y se envía en las solicitudes a rutas protegidas para garantizar seguridad.

---

##  Arquitectura general del sistema

Flujo general:
Usuario → Frontend (React) → Backend (Flask + JWT) → Motor IA (Spark NLP) → Backend → Frontend

Beneficios de la arquitectura:
- Seguridad en el acceso.  
- Control centralizado del modelo de IA.  
- Escalabilidad y mantenibilidad del sistema.

---

## 🔹 Resultados obtenidos

En entorno local, el sistema permite:
- Registro e inicio de sesión de usuarios.  
- Acceso controlado mediante autenticación JWT.  
- Envío de texto para análisis.  
- Generación de resúmenes automáticos en español.  
- Visualización clara de los resultados en el dashboard.

Los resultados demuestran que TextoClaro cumple los criterios de una aplicación web inteligente, integrando backend, frontend, base de datos e IA.

---

## 🔹 Interfaz del sistema

Se incluirán capturas de la interfaz final mostrando:
- Pantalla de registro.  
- Pantalla de login.  
- Dashboard.  
- Área de análisis de texto.  
- Visualización del resultado de la IA.

![Varu67](/miportafoliovaru/content/images/semanas/varu67.png)

---

##  Diagrama de caso de uso

Actor principal: **Usuario**. Interacciones principales:
- Registrarse en el sistema.  
- Iniciar sesión.  
- Acceder al dashboard.  
- Ingresar texto para análisis.  
- Visualizar resultados generados por la IA.  
- Cerrar sesión.

![Varu66](/miportafoliovaru/content/images/semanas/varu66.png)

---

## Reflexión final

La Semana 16 permitió integrar todos los conocimientos del curso en un solo proyecto funcional. TextoClaro demuestra que es posible desarrollar una aplicación web inteligente completa con:
- Autenticación y seguridad (JWT).  
- Arquitectura cliente-servidor bien definida.  
- Integración de un motor de IA real (Spark NLP).  

El examen representó la consolidación práctica del aprendizaje y acercó la experiencia a un proyecto profesional aplicable en contextos reales.