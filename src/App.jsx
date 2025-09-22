import { Routes, Route, Link } from "react-router-dom";

// Pages et Composants
import Accueil from './pages/Accueil/Accueil.jsx'
import MonHistoire from './pages/mon_histoire/mon_histoire.jsx';
import MesProduits from "./pages/mes_produits/mes_produits.jsx";
import Contact from "./pages/contact/contact.jsx";
//import Commander from "./pages/Commander.jsx";
//import Connexion from "./pages/Connexion.jsx";
//import Panier from "./pages/Panier.jsx";
import Fiche_produit from "./composants/fiche_produit/fiche_produit.jsx";
import Form_connexion from "./composants/connexion/connexion.jsx";
import Form_inscription from "./composants/inscription/inscription.jsx";
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
          <Route path="/mes_produits" element={<MesProduits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fiche_produit" element={<Fiche_produit />} />
          <Route path="/connexion" element={<Form_connexion />} />
          <Route path="/inscription" element={<Form_inscription />} />
        </Routes>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}