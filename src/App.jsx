// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import HomePage from "./Pages/home/HomePage.jsx"           // ✅ .jsx + ruta correcta
import AboutPage from "./Pages/aboutPage/AboutPage.jsx"        // ✅ about/ NO aboutPage/
import Header from "./components/Header/Header.jsx"        // ✅ ruta correcta
import Footer from "./components/Footer/Footer.jsx"        // ✅ ruta correcta

function App() {
  return (
    <div className="siteWrapper">
      <Header />
      <div className="siteContent">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/autor" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
