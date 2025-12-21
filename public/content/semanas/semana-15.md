# 1. Comprender qué es un Sistema Inteligente

Un sistema inteligente es más que un programa que realiza tareas. Es un sistema que percibe, razona, aprende y actúa.  
La clase lo explica como un conjunto de módulos que trabajan como si fueran los “sentidos”, el “cerebro”, la “memoria” y las “acciones” de un agente automático.

En la clase se destacan seis módulos principales:

## 1.1 Percepción
Es el punto de entrada: el sistema capta datos del entorno, sean sensores, imágenes, texto o señales.  
Es como cuando tú recibes información: ves algo, escuchas algo, lees algo.  
Los sistemas inteligentes “perciben” mediante datos.

## 1.2 Conocimiento
Aquí se almacena todo lo que el sistema sabe del mundo: bases de datos, reglas, modelos, ontologías.  
Es su biblioteca interna.

## 1.3 Razonamiento
El sistema toma decisiones siguiendo reglas, lógica o probabilidades.  
Aquí se puede usar lógica `IF–THEN`, redes bayesianas, heurísticas, etc.

## 1.4 Aprendizaje
La parte que le permite mejorar.  
A través de Machine Learning o Deep Learning, el sistema detecta patrones nuevos y ajusta su comportamiento.

## 1.5 Acción
Es el módulo que ejecuta. Puede ser físico (un brazo robótico) o digital (responder un mensaje, generar un diagnóstico, etc.).

## 1.6 Interfaz humano-máquina
El lugar donde tú interactúas con el sistema. Puede ser una web, una app, un chatbot o una API.

En conjunto, esta arquitectura permite crear soluciones completas: desde robots hasta asistentes virtuales.

 ![Varu26](/miportafoliovaru/content/images/semanas/varu26.webp)

# 2. Redes Neuronales y Deep Learning

La clase introduce esta parte para mostrar cómo aprenden los sistemas modernos.

- Las redes neuronales funcionan como mini “cerebros artificiales”, formados por capas de neuronas conectadas.  
- Cada capa transforma la información hasta obtener una salida (clasificar, predecir, generar).

Deep Learning es usar redes con muchas capas para resolver problemas más complejos: visión, lenguaje, reconocimiento, predicción, etc.

Arquitecturas modernas mencionadas:
- CNN para imágenes  
- RNN / LSTM para secuencias  
- Transformers para modelos como GPT, LLaMA, Claude

![Varu27](/miportafoliovaru/content/images/semanas/varu27.png)

# 3. Modelos Discriminativos vs Generativos

Una explicación esencial de la clase es diferenciar ambos tipos de modelos:

## Modelos discriminativos
- Reconocen o clasifican patrones.  
- Aprenden la probabilidad de un resultado `P(y|x)`.  
- Ejemplo: “esto es gripe / no es gripe”.

## Modelos generativos
- Crean contenido nuevo similar a los datos reales.  
- Aprenden la distribución completa `P(x)`.  
- Ejemplo: “generar un texto, una imagen o simular datos”.

Aquí es donde nacen los LLM.

![Varu28](/miportafoliovaru/content/images/semanas/varu28.png)

# 4. Modelos de Lenguaje (LLM)

La clase los presenta como la evolución más avanzada de la IA actual.  
Son modelos que entienden y generan lenguaje humano gracias a la arquitectura Transformer.

Características importantes:
- Generan texto nuevo coherente.  
- Trabajan con muchísima información (billones de palabras).  
- Son capaces de traducir, responder, razonar, programar, explicar y más.

Ejemplos vistos en clase: GPT, Gemini, Claude, LLaMA, Mistral.

![Varu29](/miportafoliovaru/content/images/semanas/varu29.png)

Este punto es esencial porque en el ejercicio final se integrará uno de estos LLM dentro de una interfaz web.

# 5. Parte Práctica en Clase: Lógica Basada en Reglas y Lógica Difusa

La clase no se queda en teoría: se pasa directamente al código.

## 5.1 Sistema experto basado en reglas IF–THEN
Se crea una pequeña simulación de diagnóstico médico usando Python.

La idea es enseñar que un sistema inteligente también puede construirse sin machine learning, solo con reglas del tipo:

- Si hay fiebre + tos + dolor de garganta → posible gripe  
- Si hay fiebre + dolor muscular + cansancio → posible influenza

Aquí se practica:
- Creación de clases (Persona / Paciente)  
- Herencia  
- Toma de decisiones automatizada

Es la base de muchos sistemas expertos clásicos.

## 5.2 Control climático con lógica difusa
Se trabaja la “lógica difusa”, que permite manejar conceptos subjetivos como “temperatura media” o “alta”.  
Este sistema calcula cuánta potencia debe usar un aire acondicionado según la temperatura.

Este ejemplo muestra que no toda decisión es blanco/negro; algunos sistemas necesitan manejar incertidumbre, como en la vida real.

# 6. EJERCICIO 01: CREACIÓN DE UNA INTERFAZ WEB PARA UN LLM (Explicación para tu portafolio)

Este es el punto más importante de la Semana 15 y el que quieres incluir en tu portafolio.  
Aquí se hace una integración completa entre:

- Python  
- Flask  
- Frontend (HTML, CSS, JS)  
- Un modelo LLaMA 3 ejecutándose localmente

¿Qué se busca lograr?  
Construir una mini aplicación web que funcione como un “chat” donde el usuario escribe algo y el sistema responde usando un modelo de lenguaje real —es decir, crear tu propio mini-ChatGPT local.

## Pasos clave del ejercicio

### 1. Instalar dependencias
Se instala Flask, Transformers, Torch, etc.  
Esto permite cargar el modelo y manejar las rutas del servidor.

### 2. Estructurar el proyecto
Se organiza en carpetas:

- `templates/` para el HTML  
- `static/` para CSS y JavaScript  
- `app.py` como cerebro del backend  
- `.env` para variables sensibles

Una estructura limpia, tal como se haría en un proyecto real.

### 3. Cargar el modelo LLaMA 3
En el backend se importa el modelo:

```python
from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id, device_map="auto")
```

Esto permite convertir texto en tokens, procesarlo y generar la respuesta.

### 4. Crear la ruta principal
La ruta `/` muestra la página web con el chat.

### 5. Crear la ruta `/generate`
Esta ruta recibe el mensaje del usuario (`prompt`), lo envía al LLM y devuelve la respuesta.

Aquí ocurre la magia: el modelo genera texto con `model.generate()` y lo envía de vuelta al navegador.

### 6. Frontend elegante y minimalista
El HTML tiene:

- un `textarea`  
- un botón  
- un contenedor para la respuesta

El JavaScript envía el `prompt` con `fetch()` al servidor Flask, espera la respuesta y la muestra.

### 7. Ejecutar
```bash
python app.py
```

Y el chat queda disponible en: http://localhost:5000

 ![Varu25](/miportafoliovaru/content/images/semanas/varu25.png)