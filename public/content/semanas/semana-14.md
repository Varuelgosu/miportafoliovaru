#  Semana 14 – Desarrollo Backend con Python y Flask

##  Resumen de la semana

En la semana 14 se abordó el desarrollo backend con Python, ampliando la visión del backend más allá de Java y PHP, y destacándolo como un lenguaje versátil, legible y ampliamente utilizado en entornos reales tanto para desarrollo web como para automatización, análisis de datos e inteligencia artificial; además, se aprendió cómo integrarlo con servidores web mediante frameworks como Flask para construir aplicaciones web completas y funcionales.

---

##  Introducción al lenguaje Python

Se repasaron fundamentos de Python relevantes para backend:

- Sintaxis simple y legible; uso de indentación para bloques.  
- Variables y tipos dinámicos.  
- Estructuras condicionales y bucles.  
- Funciones y manejo de excepciones.  
- Programación orientada a objetos: clases, herencia y métodos.  
- Buenas prácticas y estilo: PEP 8.

Estos conceptos facilitan escribir código limpio y mantenible en aplicaciones web.

![Imagen63](/miportafoliovaru/content/images/semanas/varu63.png)

---

##  Gestión de dependencias con PIP

Se explicó el uso de **pip** para instalar paquetes y gestionar dependencias:

- Crear y usar entornos virtuales (`venv`) para aislar dependencias.  
- Instalar Flask y extensiones (por ejemplo `flask-mysql`, `flask-sqlalchemy`).  
- Registrar dependencias en `requirements.txt` con `pip freeze > requirements.txt`.

PIP agiliza la incorporación de bibliotecas necesarias para proyectos backend en Python.

---

##  Introducción al framework Flask

Puntos clave de **Flask**, microframework elegido:

- Ligero, flexible y fácil de configurar.  
- Ideal para APIs y aplicaciones pequeñas/medianas.  
- Estructura básica de una app Flask (`app.py` o paquete).  
- Rutas con `@app.route`, manejo de métodos HTTP, y renderizado de plantillas.  
- Integración con Jinja2 como motor de plantillas.

Ejemplo mínimo:
```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
```

![Imagen64](/miportafoliovaru/content/images/semanas/varu64.png)


---

##  Práctica desarrollada con Python y Flask

Actividad práctica integrada que incluyó:

- Creación de clases en Python y OOP (Persona / Estudiante).  
- Herencia entre clases.  
- Desarrollo de una aplicación web con Flask.  
- Formularios HTML y envío de datos (GET/POST).  
- Conexión a base de datos MySQL (directamente o vía ORM como SQLAlchemy).  
- Registro de estudiantes desde la interfaz web y persistencia en DB.

La práctica mostró el flujo completo de la app: formulario → controlador Flask → persistencia → respuesta al usuario.

![Imagen65](/miportafoliovaru/content/images/semanas/varu65.png)
---

## Reflexión personal

La semana 14 destacó a Python y Flask como alternativas sólidas para el desarrollo backend: sencillas de aprender, rápidas de prototipar y suficientemente potentes para producir aplicaciones reales. Aprender a integrar Flask con servidores (Apache + mod_wsgi), manejar dependencias y usar plantillas Jinja2 proporcionó una visión práctica y aplicable para construir APIs y aplicaciones web ligeras de forma ordenada y escalable.