# Arte en el Cerro — Landing Page

## 1. Análisis

### 1.1. Contexto del proyecto

Arte en el Cerro es un evento cultural de acceso libre que presenta agrupaciones artísticas y busca fortalecer la conexión entre la comunidad politécnica y la ciudad.

El objetivo de este proyecto es desarrollar una primera versión funcional de una landing page que centralice la información del evento y permita presentar su propósito, programación artística, ubicación y otros datos relevantes mediante una interfaz organizada y adaptable.

La información recopilada durante el levantamiento de datos servirá como base para definir el contenido del sitio. Se evitará publicar información que no haya sido confirmada por los organizadores.

### 1.2. Organización del contenido

| Sección | Propósito | Datos que se presentarán |
|---|---|---|
| Inicio | Presentar el evento de forma inmediata. | Nombre, descripción breve e imagen representativa. |
| Sobre el evento | Explicar su propósito cultural. | Descripción, acceso libre e importancia para la comunidad. |
| Programación artística | Presentar las actividades culturales. | Agrupaciones, descripciones y horarios confirmados. |
| Galería | Mostrar el componente visual del evento. | Fotografías autorizadas de artistas, presentaciones y espacios. |
| Información del evento | Facilitar la consulta de datos prácticos. | Fecha, horario, ubicación y novedades confirmadas. |
| Ubicación | Ayudar a identificar el lugar de realización. | Nombre del espacio, campus y referencia de ubicación. |
| Contacto y redes sociales | Facilitar el acceso a canales oficiales. | Enlaces a redes sociales y medios de contacto disponibles. |

Estas secciones podrán ajustarse de acuerdo con los datos disponibles y las posibilidades de la plantilla seleccionada.

### 1.3. Necesidades identificadas

- **Centralización:** reunir la información relevante del evento en un solo sitio.
- **Organización:** distribuir el contenido en secciones claras.
- **Comunicación:** facilitar la consulta de ubicación y novedades.
- **Presentación visual:** mostrar imágenes relacionadas con las actividades artísticas.
- **Adaptabilidad:** permitir la visualización desde computadoras y dispositivos móviles.

## 2. Planificación

### 2.1. Plantillas candidatas

Se seleccionaron tres plantillas gratuitas de HTML5 UP:

- [ZeroFour](https://html5up.net/zerofour)
- [Alpha](https://html5up.net/alpha)
- [Prologue](https://html5up.net/prologue)

### 2.2. Comparación de las plantillas

| Criterio | ZeroFour | Alpha | Prologue |
|---|---|---|---|
| Estructura | Diseño flexible con distintas áreas de contenido. | Presentación mediante bloques informativos y páginas complementarias. | Página única organizada en secciones verticales. |
| Navegación | Menú de navegación con opciones de personalización. | Navegación convencional entre secciones y páginas. | Barra lateral con enlaces a las secciones. |
| Diseño | Versátil para combinar texto, imágenes y bloques informativos. | Limpio y orientado a presentar una propuesta de manera directa. | Minimalista y centrado en la presentación visual. |
| Adaptabilidad | Diseño adaptable a diferentes tamaños de pantalla. | Diseño adaptable a computadoras y dispositivos móviles. | Diseño adaptable con navegación lateral. |
| Personalización | Permite modificar la distribución y los componentes. | Facilita la modificación de bloques y contenidos. | Facilita la edición de una página única. |
| Adecuación al evento | Alta: permite combinar información general, programación, galería y ubicación. | Alta: apropiada para presentar información breve y directa. | Media-alta: apropiada para una presentación visual y secuencial. |

La comparación se basa en las características de las plantillas originales y en su adecuación a las necesidades del proyecto.

### 2.3. Selección y justificación de ZeroFour

El equipo seleccionó **ZeroFour** como plantilla base para desarrollar la landing page de Arte en el Cerro.

La elección se justifica por su flexibilidad para organizar diferentes tipos de contenido en un mismo sitio. El proyecto requiere presentar información general, actividades artísticas, imágenes, ubicación y medios de contacto. La estructura de ZeroFour proporciona una base adecuada para distribuir estos elementos y personalizarlos según las necesidades del evento.

Además, su diseño adaptable permite desarrollar una interfaz que pueda visualizarse en diferentes dispositivos. Sus archivos HTML, CSS y recursos asociados también facilitan modificar la presentación visual, los textos y las imágenes.

Aunque Alpha ofrece una estructura apropiada para una landing page y Prologue facilita la navegación por una página única, el equipo considera que ZeroFour se ajusta mejor a la variedad de contenido que se desea presentar.

### 2.4. Plan de trabajo del Sprint 1

| Actividad | Resultado esperado |
|---|---|
| Revisar la información del evento. | Identificar los datos disponibles y los pendientes de confirmación. |
| Organizar el contenido. | Definir las secciones de la landing page. |
| Comparar las plantillas. | Analizar tres alternativas. |
| Seleccionar ZeroFour. | Documentar la decisión y su justificación. |
| Adaptar HTML y CSS. | Obtener una primera versión de la página. |
| Verificar navegación y adaptabilidad. | Comprobar el funcionamiento en distintos tamaños de pantalla. |
| Publicar el repositorio. | Disponer del código y la documentación en GitHub. |

### 2.5. Organización ágil del trabajo

El desarrollo se dividirá en tareas pequeñas y verificables. Los integrantes coordinarán la distribución de actividades, revisarán los avances y actualizarán el estado de cada tarea conforme se complete.

Se priorizará primero la estructura principal de la página y después la personalización visual, la incorporación del contenido y la validación del funcionamiento.

## 3. Diseño

### 3.1. Estructura de la landing page

La página se organizará en las siguientes secciones:

1. **Inicio:** nombre del evento, descripción e imagen principal.
2. **Sobre el evento:** propósito y descripción de Arte en el Cerro.
3. **Programación artística:** agrupaciones y presentaciones confirmadas.
4. **Galería:** fotografías autorizadas relacionadas con el evento.
5. **Información y ubicación:** datos prácticos para conocer el lugar y las condiciones de la actividad.
6. **Contacto y redes sociales:** canales oficiales disponibles.
7. **Pie de página:** créditos y atribución de la plantilla.

La estructura definitiva dependerá de la organización de ZeroFour y de la información disponible.

### 3.2. Criterios de diseño

- **Jerarquía visual:** destacar el nombre del evento y la información principal.
- **Consistencia:** mantener uniformidad en tipografías, colores y espaciados.
- **Legibilidad:** utilizar textos claros y contrastes adecuados.
- **Adaptabilidad:** comprobar la presentación en computadoras y dispositivos móviles.
- **Coherencia temática:** utilizar recursos visuales relacionados con las actividades culturales.
- **Navegación clara:** emplear etiquetas descriptivas para cada sección.

## 4. Implementación

### 4.1. Tecnologías utilizadas

| Tecnología | Función |
|---|---|
| HTML5 | Estructurar el contenido de la página. |
| CSS3 | Personalizar la apariencia y distribución visual. |
| JavaScript | Mantener o adaptar las interacciones de la plantilla, cuando corresponda. |
| Git | Controlar las versiones del código. |
| GitHub | Alojar el repositorio público y facilitar la colaboración. |
| HTML5 UP | Proporcionar la plantilla ZeroFour. |

### 4.2. Estructura del repositorio

La estructura debe conservar los archivos y las carpetas necesarios de la plantilla original. Una organización de referencia es:

```text
landing-page-arte-en-el-cerro/
├── README.md
├── index.html
├── LICENSE.txt
├── css/
└── images/
```

Los nombres y las rutas definitivas deben coincidir con los archivos reales del proyecto para evitar errores al cargar estilos, scripts, fuentes e imágenes.

### 4.3. Control de versiones

Git se utilizará para registrar los cambios del proyecto y GitHub para alojar el código fuente.

Se propone utilizar commits descriptivos que permitan identificar las modificaciones realizadas. Algunos ejemplos son:

```text
docs: documentar el proyecto
feat: adaptar la estructura de ZeroFour
style: personalizar los estilos de la página
content: incorporar información del evento
fix: corregir enlaces y recursos
```

Estos mensajes son ejemplos de la convención propuesta, no un registro de cambios ya realizados.

### 4.4. Criterios de validación

La primera versión funcional deberá cumplir con los siguientes criterios:

- El archivo `index.html` se abre correctamente en un navegador.
- Los estilos, las imágenes y los recursos se cargan correctamente.
- Las secciones principales están incorporadas.
- Los enlaces de navegación funcionan.
- La página se visualiza adecuadamente en diferentes tamaños de pantalla.
- El repositorio contiene los archivos necesarios para visualizar la página.

## 5. Despliegue

El proyecto se alojará en un repositorio público de GitHub.

**URL del repositorio:** [Agregar la URL del repositorio]

Como opción de publicación, se podrá configurar GitHub Pages para servir la página web.

**URL de la landing page:** [Agregar la URL publicada cuando esté disponible]

Antes de entregar el proyecto, se comprobará que el repositorio sea accesible públicamente y que la página publicada, si corresponde, cargue correctamente sus estilos, imágenes y elementos de navegación.

## 6. Bibliografía

HTML5 UP. (s. f.). *ZeroFour*. https://html5up.net/zerofour

HTML5 UP. (s. f.). *Alpha*. https://html5up.net/alpha

HTML5 UP. (s. f.). *Prologue*. https://html5up.net/prologue

HTML5 UP. (s. f.). *Responsive HTML5 and CSS3 site templates*. https://html5up.net/

GitHub Docs. (s. f.). *GitHub Pages*. https://docs.github.com/en/pages

**Nota:** conservar la atribución de HTML5 UP y revisar el archivo de licencia incluido con la plantilla ZeroFour para cumplir sus condiciones de uso.

---

**Integrantes:**
- [John Carreño]
- [Geanpierre Desiderio]

**Institución:** Escuela Superior Politécnica del Litoral (ESPOL)

