import { Routes, Route } from 'react-router-dom'
import HomePage from "./Pages/home/HomePage.jsx"           
import AboutPage from "./Pages/aboutPage/AboutPage.jsx"        
import Header from "./components/Header/Header.jsx"        
import Footer from "./components/Footer/Footer.jsx"        

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
