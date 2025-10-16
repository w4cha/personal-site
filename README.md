# Portafolio Profesional: Lucas Matías Folch Cañete

¡Bienvenido(a) a mi portafolio profesional!

Este repositorio contiene el código fuente de mi sitio web personal, diseñado para mostrar mis habilidades, experiencia y proyectos de desarrollo web y reciente incursión en la **Ingeniería de Datos**.

## 🚀 Tecnologías Clave

Mi portafolio ha sido construido utilizando una pila tecnológica (stack) enfocada en el desarrollo *frontend* robusto, la interactividad ligera, y la modularidad de contenido, manteniendo la capacidad de escalar a aplicaciones full-stack:

| Categoría | Tecnologías Utilizadas |
| :--- | :--- |
| **Estructura** | HTML5 (Semántico) |
| **Diseño** | **Bootstrap 5.3** (CSS) y CSS puro (Custom styles) |
| **Interactividad** | **jQuery** (para manipulación del DOM y lógica de la galería) y **JavaScript** |
| **Contenido Dinámico** | **htmx** (para inyecciones de contenido y mensajes de formulario sin recarga) |
| **Estilos Avanzados** | SVG (Scalable Vector Graphics) para la sección de Galería |
| **Back-end** (Proyectos) | **Python**, **Django** (en proyectos de galería) |
| **Datos** (Habilidades) | **SQL** (Analítico), Python (Pandas/Kafka), Cloud Computing (AWS/GCP) |

---

## 🏗️ Estructura del Proyecto

El sitio está organizado de manera sencilla e intuitiva:

* **`index.html`**: Archivo principal que contiene toda la estructura del portafolio.
* **`assets/css/style.css`**: Hoja de estilos personalizados (junto con Bootstrap).
* **`assets/js/script.js`**: Lógica de JavaScript y jQuery, vital para la navegación, la funcionalidad de la galería de proyectos y el manejo de modales de contacto.
* **`assets/img/`**: Contiene todas las imágenes de perfil, logos y las miniaturas (`projects_img/`) usadas en la galería SVG.

---

## 🧩 Contenido del Portafolio

El sitio se divide en las siguientes secciones navegables:

### 1. Inicio (`#start`)
Introducción y la barra de navegación principal.

### 2. Sobre Mí (`#about_me`)
Presentación personal y un listado de habilidades técnicas con indicadores de progreso.

**Habilidades Destacadas:**
* Python
* Ingeniería de Datos (Data Engineering)
* SQL (Analítico / Data Warehousing)
* Cloud Computing (AWS/GCP)
* HTML / CSS / JavaScript

### 3. Galería de Proyectos (`#gallery`) 🖼️

Una sección interactiva que presenta mis trabajos más relevantes. Para gestionar el espacio, se implementó un *scroll horizontal*.

Al hacer clic en cualquier proyecto, se abre una ventana modal (`<dialog>`) con una descripción detallada, así como enlaces a su repositorio en GitHub o demostraciones en video (YouTube).

**Proyectos Incluidos:**

* **Proyectos Full-Stack/Web:** Portal de Venta de Fármacos, Galería de Vehículos, Cs50 Finance, Recicla Chile.
* **Proyectos de Lógica/Scripting:** SudokuSolver.
* **Proyectos de Data Engineering (Nuevos):** Data Pipeline en Tiempo Real, Visualización de Datos, Proceso ETL automatizado, Modelo Predictivo Básico (ML).

### 4. Contacto (`#contact`) 📧
Permite a los visitantes descargar mi Currículum Vitae (CV) o enviarme un mensaje directamente a través de un formulario integrado (configurado con `htmx` y Netlify Forms).

### 5. Redes Sociales (`#socials`)
Enlaces directos a mi perfil de **GitHub** y **LinkedIn**.

---

## 🛠️ Ejecución Local

Para visualizar este portafolio en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/w4cha/nombre-del-repo.git](https://github.com/w4cha/nombre-del-repo.git)
    ```
2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd nombre-del-repo
    ```
3.  **Abre `index.html`** en tu navegador web de preferencia (Chrome, Firefox, etc.).

No se requiere un servidor de *backend* para la visualización del portafolio, ya que el contenido se carga de forma estática y el procesamiento del formulario de contacto se maneja externamente (si se utiliza una solución como Netlify Forms).

---

## ✒️ Autor

**Lucas Matías Folch Cañete**

¡Gracias por visitar mi portafolio! Si tienes alguna pregunta, no dudes en contactarme.
