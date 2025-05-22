import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FilmmakerDetail from './pages/FilmmakerDetail'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmmaker/:id" element={<FilmmakerDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
