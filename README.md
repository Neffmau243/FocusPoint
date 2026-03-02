# 📸 FocusPoint - Fotografía Profesional

<div align="center">

![FocusPoint](https://img.shields.io/badge/FocusPoint-Fotografía_Profesional-ff6b6b?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Sitio web profesional para servicios de fotografía**

[Ver Demo](#) · [Reportar Bug](#) · [Solicitar Feature](#)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Páginas del Sitio](#-páginas-del-sitio)
- [Funcionalidades](#-funcionalidades)
- [Optimizaciones](#-optimizaciones)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Contacto](#-contacto)

---

## 🎯 Acerca del Proyecto

**FocusPoint** es un sitio web profesional diseñado para un equipo de fotógrafos especializados en capturar momentos únicos e inolvidables. Con más de 5 años de experiencia, el sitio ofrece una plataforma completa para mostrar portafolios, servicios y gestionar reservas de sesiones fotográficas.

### ¿Por qué FocusPoint?

- 🎨 **Diseño Moderno y Elegante**: Interfaz limpia y profesional que destaca el trabajo fotográfico
- 📱 **Totalmente Responsivo**: Experiencia óptima en dispositivos móviles, tablets y desktop
- 🚀 **Rendimiento Optimizado**: Carga rápida y experiencia de usuario fluida
- 💼 **Gestión de Reservas**: Sistema integrado para que los clientes agenden sesiones fácilmente
- 🔍 **Búsqueda Avanzada**: Funcionalidad de búsqueda para encontrar contenido rápidamente

---

## ✨ Características

### 🏠 Página Principal (Home)
- Hero section impactante con call-to-action
- Vista previa de la sección "Sobre Nosotros"
- Galería destacada de servicios (Bodas, Eventos, Retratos, Productos)
- Testimonios de clientes
- Footer con información de contacto y redes sociales

### 👥 Sobre Nosotros
- Historia y filosofía del equipo
- Presentación de especialidades fotográficas
- Valores y compromiso profesional
- Información de experiencia (5+ años)

### 📷 Sesiones Fotográficas
Catálogo completo de servicios ofrecidos:
- **Bodas**: Captura cada detalle del día especial
- **Eventos Sociales**: Cumpleaños, graduaciones, celebraciones
- **Retratos**: Sesiones personalizadas individuales y familiares
- **Productos**: Fotografía comercial y de producto
- Galerías con lightbox interactivo
- Sistema de filtrado por categorías

### 📅 Sistema de Reservas
- Formulario completo de contacto
- Selección de tipo de sesión
- Selector de fecha y hora
- Validación de formularios en tiempo real
- Mensajes de confirmación
- Información de paquetes y precios

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS y Flexbox/Grid
- **JavaScript (Vanilla)**: Interactividad sin dependencias externas
- **Font Awesome 6.4.0**: Iconografía profesional

### Características Técnicas
- ✅ Responsive Design (Mobile-First)
- ✅ CSS Grid y Flexbox para layouts
- ✅ Intersection Observer API para animaciones
- ✅ Event Delegation para mejor rendimiento
- ✅ LocalStorage para persistencia de datos
- ✅ Form Validation
- ✅ Smooth Scrolling
- ✅ Lazy Loading de imágenes

---

## 📁 Estructura del Proyecto

```
focuspoint/
│
├── index.html                 # Página principal
├── newlogo.png               # Logo del sitio
│
├── css/                      # Hojas de estilo
│   ├── general.css          # Estilos globales y navbar
│   ├── home.css             # Estilos página principal
│   ├── sobre-mi.css         # Estilos página sobre nosotros
│   ├── sesiones.css         # Estilos galería de sesiones
│   ├── reservas.css         # Estilos formulario de reservas
│   └── CSS_OPTIMIZATIONS.md # Documentación de optimizaciones
│
├── html/                    # Páginas HTML
│   ├── sobre-mi.html       # Página sobre nosotros
│   ├── sesiones.html       # Página de sesiones/servicios
│   └── reservas.html       # Página de reservas
│
├── js/                      # Scripts JavaScript
│   ├── general.js          # Funciones globales (navbar, búsqueda)
│   ├── home.js             # Lógica página principal
│   ├── sobre-mi.js         # Lógica página sobre nosotros
│   ├── sesiones.js         # Lógica galería y filtros
│   ├── reservas.js         # Lógica formulario de reservas
│   └── script.js           # Scripts adicionales
│
└── imgPhotos/              # Recursos visuales
    ├── boda*.jpg          # Imágenes de bodas
    ├── social*.jpeg       # Imágenes de eventos sociales
    ├── retrato*.jpeg      # Imágenes de retratos
    ├── producto*.jpeg     # Imágenes de productos
    └── fotoHomeFinal.png  # Imagen principal
```

---

## 🚀 Instalación

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (recomendado: VS Code)
- (Opcional) Servidor local para desarrollo

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/focuspoint.git
   ```

2. **Navegar al directorio**
   ```bash
   cd focuspoint
   ```

3. **Abrir el proyecto**
   
   Opción A - Directamente en el navegador:
   ```bash
   # Simplemente abre index.html en tu navegador
   ```
   
   Opción B - Con servidor local (recomendado):
   ```bash
   # Si tienes Python instalado
   python -m http.server 8000
   
   # O con Node.js y npx
   npx http-server
   
   # O con Live Server de VS Code
   # Clic derecho en index.html > "Open with Live Server"
   ```

4. **Acceder al sitio**
   ```
   http://localhost:8000
   ```

---

## 📄 Páginas del Sitio

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Home** | `index.html` | Página principal con hero, preview de servicios y testimonios |
| **Sobre Nosotros** | `html/sobre-mi.html` | Información del equipo, filosofía y experiencia |
| **Sesiones** | `html/sesiones.html` | Galería completa de servicios fotográficos con filtros |
| **Reservas** | `html/reservas.html` | Formulario de contacto y reserva de sesiones |

---

## ⚙️ Funcionalidades

### Navegación
- ✅ Navbar responsivo con menú hamburguesa en móviles
- ✅ Indicador de página activa
- ✅ Smooth scroll entre secciones
- ✅ Barra de búsqueda desplegable

### Interactividad
- ✅ Animaciones al hacer scroll (Intersection Observer)
- ✅ Lightbox para galería de imágenes
- ✅ Filtros dinámicos por categoría de sesión
- ✅ Validación de formularios en tiempo real
- ✅ Mensajes de éxito/error
- ✅ Efectos hover en botones y tarjetas

### Experiencia de Usuario
- ✅ Carga progresiva de imágenes
- ✅ Estados de carga
- ✅ Feedback visual en interacciones
- ✅ Diseño accesible (ARIA labels)
- ✅ SEO optimizado

---

## 🎨 Optimizaciones

El proyecto incluye múltiples optimizaciones documentadas en `css/CSS_OPTIMIZATIONS.md`:

- **Performance**: Reducción de selectores complejos, uso de Flexbox/Grid
- **Mantenibilidad**: Variables CSS para colores y medidas
- **Responsive**: Media queries estratégicas con enfoque mobile-first
- **Accesibilidad**: Contraste adecuado y navegación por teclado
- **Code Quality**: Código modular y reutilizable

---

## 📸 Capturas de Pantalla

### Página Principal
> _Sección hero con call-to-action y preview de servicios_

### Galería de Sesiones
> _Sistema de filtrado y lightbox interactivo_

### Formulario de Reservas
> _Interfaz intuitiva para agendar sesiones_

---

## 🤝 Contribuir

Las contribuciones son lo que hace que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. ¡Cualquier contribución que hagas será **muy apreciada**!

1. Fork el proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica increíble'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Roadmap

- [ ] Integración con backend para gestión de reservas
- [ ] Panel de administración
- [ ] Pasarela de pagos
- [ ] Blog de fotografía
- [ ] Sistema de comentarios
- [ ] Integración con redes sociales
- [ ] Modo oscuro
- [ ] Multi-idioma (ES/EN)

---

## 📞 Contacto

**FocusPoint Team**

- 📧 Email: contacto@focuspoint.com
- 📱 Teléfono: +XX XXX XXX XXXX
- 🌐 Website: [www.focuspoint.com](#)
- 📷 Instagram: [@focuspoint](#)

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🙏 Agradecimientos

- Font Awesome por los iconos
- Unsplash por imágenes de muestra
- Comunidad de desarrolladores por el feedback

---

<div align="center">

### ⭐️ Si te gustó este proyecto, no olvides darle una estrella!

**Hecho con ❤️ por el equipo de FocusPoint**

</div>
