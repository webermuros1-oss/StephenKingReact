import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from "./components/Footer"
import Header from "./components/Header"
import './App.css'
function App() {
  return (
    <div>
      <Header/>
      <h1 className="text-3xl font-bold text-center  bg-black text-red-700 py-4">
        Sthephen King
      </h1>
      <Footer/>
    </div>
  )
}

export default App

