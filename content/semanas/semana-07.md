###  Semana 07 – Hooks y gestión de estado en React

## Resumen de la semana

En la semana 7 se trabajó uno de los temas más importantes de React: los **Hooks**. Esta clase marcó un cambio clave en la forma de desarrollar aplicaciones con React, ya que permitió comprender cómo los componentes funcionales pueden manejar estado, efectos y lógica compleja, dejando en gran medida obsoletos a los componentes de clase.

---

##  ¿Qué son los Hooks en React?

Los Hooks (introducidos en React 16.8) son funciones especiales que permiten a los componentes funcionales acceder a características avanzadas de React, como:

- Guardar y actualizar datos dentro de un componente.  
- Ejecutar código en momentos específicos del ciclo de vida.  
- Compartir lógica entre componentes sin duplicación.

Gracias a los hooks, ya no es necesario usar componentes de clase para manejar estado o efectos.

![Imagen69](/miportafoliovaru/content/images/semanas/varu69.png)

---

##  Gestión de estado en React

State Management es el proceso de controlar y actualizar el estado de una aplicación. El estado representa información que cambia con el tiempo, por ejemplo:

- Datos de un formulario  
- Información del usuario  
- Resultados de una API  
- Estado de la interfaz (loading, error, etc.)

Conceptos clave:
- State: datos internos del componente que pueden cambiar.  
- Props: datos recibidos desde un componente padre (inmutables dentro del hijo).

Entender la diferencia entre state y props es fundamental para el flujo de datos en React.

![Imagen68](/miportafoliovaru/content/images/semanas/varu68.png)

---

##  Hook useState

`useState` permite definir variables de estado y actualizar el estado, provocando un re-render cuando cambia.

Ejemplos de uso:
- Estados simples: números, strings, booleanos.  
- Múltiples estados en un mismo componente.  
- Estados basados en objetos (recordar manejar la inmutabilidad).

Pequeño ejemplo:
```jsx
import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Incrementar</button>
    </div>
  );
}
```
Nota: al actualizar un objeto en estado, hay que copiar las propiedades no modificadas (p. ej. con spread) para no sobrescribir todo el objeto.

---

##  Hook useEffect

`useEffect` permite ejecutar código en momentos concretos del ciclo de vida:
- Al montar el componente.  
- Después de cada render.  
- Cuando cambia una dependencia específica.

Usos comunes:
- Llamadas a APIs.  
- Manipulación o sincronización con el DOM.  
- Temporizadores y limpieza (cleanup).

Ejemplo:
```jsx
import { useEffect } from 'react';

useEffect(() => {
  // efecto al montar
  fetchData();

  return () => {
    // limpieza al desmontar
    cleanup();
  };
}, [dependencia]); // array de dependencias
```
El array de dependencias es crítico: un mal uso puede causar renders innecesarios o bucles infinitos.

---

##  Hook useContext

`useContext` facilita compartir información entre muchos componentes sin pasar props manualmente por cada nivel.

- Ideal para estado global ligero (usuario, tema, configuraciones).  
- Se crea un Context Provider en un componente superior y los hijos consumen ese contexto con `useContext`.

Esto simplifica el paso de datos cuando la aplicación crece.

---

## Custom Hooks

Los Custom Hooks son funciones que permiten reutilizar lógica entre componentes.

Reglas y recomendaciones:
- Deben empezar con `use` (p. ej. `useFetch`, `useAuth`).  
- Encapsulan una responsabilidad única.  
- Pueden combinar `useState`, `useEffect` y otros hooks.

Ejemplo conceptual: un custom hook para consumir una API y devolver datos, loading y error.

---

##  Hook useReducer

`useReducer` es útil cuando el estado es complejo o hay muchas acciones que lo modifican.

- Basado en el patrón reducer (estado + acción → nuevo estado).  
- Recomendado para estructuras anidadas o lógica de actualización compleja.

Ejemplo de firma:
```jsx
const [state, dispatch] = useReducer(reducer, initialState);

```
![Imagen70](/miportafoliovaru/content/images/semanas/varu70.png)

---

##  Hooks de navegación con React Router

Se vieron hooks para manejar navegación y parámetros:

- `useNavigate`: navegar programáticamente entre rutas.  
- `useParams`: obtener parámetros dinámicos de la URL.  
- `useLocation`, `useSearchParams` y otros hooks útiles para manejar routing.

Son fundamentales para construir rutas dinámicas y controlar la navegación en aplicaciones SPA.

---

## Reflexión personal

La semana 7 fue clave para entender el funcionamiento interno de React. Los hooks permitieron ver que una aplicación bien estructurada depende de una correcta gestión del estado y de los efectos, más que de componentes de clase. Este conocimiento es fundamental para desarrollar aplicaciones modernas, escalables y mantenibles.