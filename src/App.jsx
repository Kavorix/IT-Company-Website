import React from 'react'
import { AppRouter } from './router/router'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App