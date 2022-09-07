import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route element={<Home />} path='/' />
      </Routes>
    </BrowserRouter>
  )
}

export default App