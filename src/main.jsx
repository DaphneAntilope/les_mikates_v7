// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import MyCartProvider from './composants/context/CartProvider.jsx'

// global css (variables, fonts, reset...)
import './assets/generales/generales.css'
import './assets/fonts/fonts.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MyCartProvider>
        <App />
      </MyCartProvider>
    </BrowserRouter>
  </StrictMode>
)
