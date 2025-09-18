import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/generales/generales.css'; //importation des variables css
import './assets/fonts/fonts.css'; //importation des typographie de la page


import Header from './composants/header/header.jsx';
import Footer from './composants/footer/footer.jsx';
import Carrousel from './composants/carrousel/carrousel.jsx';
import Avis_client from './composants/avis_client/avis_client.jsx';

// import SimpleParallax from "simple-parallax-js";

// createRoot(document.getElementById('body')).render(
//   <StrictMode>
//     <SimpleParallax>
//       <img src="src/assets/images/accueil/background.png" alt="image" />
//     </SimpleParallax>
//   </StrictMode>
// );

createRoot(document.getElementById('header')).render(
  <StrictMode>
    <Header />
  </StrictMode>
);

createRoot(document.getElementById('section4')).render(
  <StrictMode>
    <Carrousel />
  </StrictMode>
);


createRoot(document.getElementById('section6')).render(
  <StrictMode>
    <Avis_client />
    <Avis_client />
    <Avis_client />
  </StrictMode>
);

createRoot(document.getElementById('footer')).render(
  <StrictMode>
    <Footer />
  </StrictMode>
);

