import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/Working.jsx'
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <> <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/working" element={<About />} />
    </Routes>
      
    </>
  )
}

export default App
