# 🌍 Prueba Técnica Frontend: Maquetación Web Responsive

## 💻 Tecnologías Utilizadas

Vite, para montar el proyecto  y dependencias
React para gestionar los componentes y los estados 
Bootstrap 5.2 (mediante CDN)
SCSS para los estilos y variables 
Metodología BEM, para las nomenclaturas

## Levantar el Proyecto en Local
Navega hasta el directorio raíz del proyecto 

```bash
npm install

# luego
npm run dev
```

El proyecto se compilará y estará disponible en `http://localhost:5173/`.

-----
## 1. Componentes y Estilos

He dividido la página en estos componentes para que todo sea modular y fácil de mantener y editar:

| Componente | Función Principal |
| :--- | :--- |
| **`App`** | Contenedor principal de la aplicación. |
| **`Hero`** | Encabezado de la página. |
| **`NavBar`** | Menú navegación. |
| **`MainContent`** | Contenedor principal del *layout* (envoltura del contenido y la lista de tarjetas). |
| **`Aside`** | Barra lateral de **filtros**. Añade el *Accordion* y los *Tooltips*. |
| **`CardList`** | Contenedor de las tarjetas. Gestiona la lógica de **agrupamiento por continente** y la rejilla de Cards|
| **`Card`** | Contiene la lógica manual de inicialización del **Popover** de precios. |
| **`Icon`** | Componente para renderizar todos los iconos SVG. |
| **`Footer`** | Pie de página. |

## 2. Funcionalidades visuales

| Funcionalidad | Función |
| :--- | :--- |
| **`Filtros Menu`** | Expande/oculta el menu lateral de los filtros. |
| **`Accordion`** | Expande/oculta los filtros. |
| **`Tooltips`** |  Muestra texto exta en el icono de información. |
| **`Popover`** | Despliega el bloque de desglose de precios. |

## 3. Comentarios adicionales:

Opté por React para conseguir algo de reactividad en los estados de los componentes.
Por ejemplo: El menú lateral recibe el el estado de abierto/cerrado que se utiliza en otros componentes.

El menú lateral se abre/cierra mediante clases CSS.

Opté por la carga de Bootstrap 5.2 vía CDN para ahorrar tiempo, pero al final hubiera mejorado si estuviera en el propio código o en un paquete de Node, ya que ha llevado muchas incompatibilidades con React. (popovers, accotdion y tooltip) que he tenido que solventar.

Las cards se llenan con datos de un Array de Objetos en "destinyCards.json".

Soy conciente que han faltado muchas cosas
como por ejemplo: definir todas las variables de color en un archivo concreto 
separar los SCSS en hojas dedicadas (mixins,funciones, abstracts, utils)

Cualquier duda estaré encantado de resolverla. 

Un saludo!

Xavi Barrios.

