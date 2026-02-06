# Stephen King Website - React + Tailwind

Este es el proyecto de Stephen King convertido de HTML/CSS/JS vanilla a React con CSS.

## Screenshot

![alt text](public/images/logo/captura.png)

## 🚀 Características

- ✅ Header y Footer como componentes reutilizables
- ✅ Tarjetas de libros con datos de JSON local
- ✅ Tabla de libros con datos de la API de Stephen King
- ✅ Página "Acerca del Autor"
- ✅ Diseño responsive
- ✅ Fuentes personalizadas (Creepster y Cinzel)
- ✅ Tema oscuro con colores rojos

## 📦 Instalación

1. Crear un nuevo proyecto de React con Vite:
```bash
npm create vite@latest stephen-king-react -- --template react
cd stephen-king-react
```

2. Instalar dependencias:
```bash
npm install
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── BookCards.jsx
│   └── BooksTable.jsx
├── pages/
│   ├── HomePage.jsx
│   └── AboutPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Configuración de Tailwind

Reemplaza el contenido de `tailwind.config.js` con:


## 🖼️ Assets Necesarios

Asegúrate de tener estas carpetas en tu directorio `public/`:

```
public/
├── images/
│   ├── logo/
│   │   └── StephenKingLogo.png
│   ├── books/
│   │   ├── carrie.jpg
│   │   ├── it.jpg
│   │   ├── the_shining.jpg
│   │   └── misery.jpg
│   └── aboutHe/
│       ├── logoFaceBook.png
│       ├── InstagramIcon.png
│       ├── linkedin.png
│       ├── cartelCarrie.jpg
│       ├── stephenKingPhoto.jpg
│       └── logoStephenKingSinBordes.png
│
├── pdf/
│   ├── avisoLegal.pdf
│   ├── politicaPrivacidadDatos.pdf
│   ├── condicionesGeneralesVenta.pdf
│   └── politicaCookies.pdf
│
└── json/
    └── cardsAndTable.json

```

## 🔧 Uso de Componentes

### Página Principal (App.jsx)
```jsx
import Header from './components/Header';
import Footer from './components/Footer';
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
- Las imágenes deben estar optimizadas para web
- El JSON local debe tener la estructura correcta con el campo `data`

## 🎭 Tema

El proyecto usa una paleta de colores oscura con acentos rojos:
- Negro: #000000, #1a1a1a
- Grises: #111827, #1f2937, #374151
- Rojo sangre: #8a0303, #6d0202
- Blanco: #ffffff

## 📄 Licencia
Licencia MIT

Este proyecto está licenciado bajo la Licencia MIT.

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el “Software”), para utilizar el Software sin restricción, incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del Software, y a permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA “TAL CUAL”, SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A LAS GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑO U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRA FORMA, QUE SURJA DE, O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.

© 2025 Stephen King. Todos los derechos reservados.