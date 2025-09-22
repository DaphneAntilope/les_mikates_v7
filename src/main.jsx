import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 

import Panier from './pages/panier/panier.jsx'
import App from './App.jsx'

import './assets/generales/generales.css'; //importation des variables css
import './assets/fonts/fonts.css'; //importation des typographie de la page



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Panier>
      <App />
    </Panier>
    </BrowserRouter>
  </StrictMode>
)