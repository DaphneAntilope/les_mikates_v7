import { Routes, Route, Link } from "react-router-dom";
import './assets/generales/generales.css'; //importation des variables css
import './assets/fonts/fonts.css'; //importation des typographie de la page


// Pages
import Accueil from './pages/Accueil/Accueil.jsx'
import MonHistoire from './pages/mon_histoire/mon_histoire.jsx';
//import MesProduits from "./pages/MesProduits.jsx";
//import Contact from "./pages/Contact.jsx";
//import Commander from "./pages/Commander.jsx";
//import Connexion from "./pages/Connexion.jsx";
//import Panier from "./pages/Panier.jsx";

//Les Composants
import Header from './composants/header/header.jsx';
import Footer from './composants/footer/footer.jsx';

// import SimpleParallax from "simple-parallax-js";

// createRoot(document.getElementById('body')).render(
//   <StrictMode>
//     <SimpleParallax>
//       <img src="src/assets/images/accueil/background.png" alt="image" />
//     </SimpleParallax>
//   </StrictMode>
// );


export default function App() {
  return (
    <>
      <header id="header">
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/mon_histoire" element={<MonHistoire />} />
        </Routes>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}