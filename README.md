# Stephen King Website - React + Tailwind

Este es el proyecto de Stephen King convertido de HTML/CSS/JS vanilla a React con Tailwind CSS.

## 🚀 Características

- ✅ Header y Footer como componentes reutilizables
- ✅ Carrusel de videos con transiciones suaves
- ✅ Tarjetas de libros con datos de JSON local
- ✅ Tabla de libros con datos de la API de Stephen King
- ✅ Página "Acerca del Autor"
- ✅ Diseño responsive con Tailwind CSS
- ✅ Fuentes personalizadas (Creepster y Cinzel)
- ✅ Tema oscuro con colores rojos

## 📦 Instalación

1. Crear un nuevo proyecto de React con Vite:
```bash
npm create vite@latest stephen-king-react -- --template react
cd stephen-king-react
```

2. Instalar Tailwind CSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Instalar dependencias:
```bash
npm install
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Carousel.jsx
│   ├── BookCards.jsx
│   └── BooksTable.jsx
├── pages/
│   └── AboutPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Configuración de Tailwind

Reemplaza el contenido de `tailwind.config.js` con:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blood-red': '#8a0303',
        'dark-red': '#6d0202',
      },
      fontFamily: {
        'creepster': ['Creepster', 'cursive'],
        'cinzel': ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}
```

## 🖼️ Assets Necesarios

Asegúrate de tener estas carpetas en tu directorio `public/`:

```
public/
├── images/
│   ├── logo/
│   │   └── StephenKingLogo.png
│   ├── aboutHe/
│   │   ├── logoFaceBook.png
│   │   ├── InstagramIcon.png
│   │   ├── linkedin.png
│   │   ├── cartelCarrie.jpg
│   │   ├── stephenKingPhoto.jpg
│   │   └── logoStephenKingSinBordes.png
│   └── carrousel/
│       ├── itPoster.jpg
│       └── longWalkPoster.jpg
├── videos/
│   ├── itMovie.mp4
│   ├── largaMarchaMovie.mp4
│   ├── peliculaCarrie.mp4
│   └── trailerLibroFinal.mp4
├── pdf/
│   ├── avisoLegal.pdf
│   ├── politicaPrivacidadDatos.pdf
│   ├── condicionesGeneralesVenta.pdf
│   └── politicaCookies(3).pdf
└── json/
    └── cardsAndTable.json
```

## 🔧 Uso de Componentes

### Página Principal (App.jsx)
```jsx
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import BookCards from './components/BookCards';
import BooksTable from './components/BooksTable';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Carousel />
      <BookCards />
      <BooksTable />
      <Footer />
    </div>
  );
}

export default App;
```

### Página del Autor
```jsx
import AboutPage from './pages/AboutPage';

// En tu router o componente principal
<AboutPage />
```

## 🎯 Características de los Componentes

### Header
- Navegación responsive
- Menú hamburguesa en móviles
- Logo y título personalizados
- Enlaces a diferentes secciones

### Footer
- Links a redes sociales
- Enlaces rápidos
- Sección de soporte técnico
- Newsletter con formulario
- Copyright y logo

### Carousel
- Navegación entre videos
- Botones prev/next
- Indicadores de posición
- Transiciones suaves con opacity
- Controles de video nativos

### BookCards
- Grid responsive
- Carga de datos desde JSON local
- Efectos hover
- Estados de loading y error
- Cards con información del libro

### BooksTable
- Tabla con scroll vertical
- Datos de API externa
- Headers sticky
- Información de villanos y nominaciones
- Estados de loading y error

## 🚀 Comandos

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Clases Tailwind Personalizadas

- `bg-blood-red` → #8a0303
- `bg-dark-red` → #6d0202
- `font-creepster` → Font 'Creepster'
- `font-cinzel` → Font 'Cinzel'

## 📱 Responsive

Todos los componentes son completamente responsive con breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔗 APIs Utilizadas

- **Stephen King API**: `https://stephen-king-api.onrender.com/api/books`
- **JSON Local**: `/json/cardsAndTable.json`

## 📝 Notas

- Las fuentes Google Fonts se cargan automáticamente desde el CSS
- Los videos deben estar en formato MP4
- Las imágenes deben estar optimizadas para web
- El JSON local debe tener la estructura correcta con el campo `data`

## 🎭 Tema

El proyecto usa una paleta de colores oscura con acentos rojos:
- Negro: #000000, #1a1a1a
- Grises: #111827, #1f2937, #374151
- Rojo sangre: #8a0303, #6d0202
- Blanco: #ffffff

## 📄 Licencia

© 2025 Stephen King. Todos los derechos reservados.