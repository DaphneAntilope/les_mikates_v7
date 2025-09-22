import { Link } from "react-router-dom";
import './carte_produit.css';
import plat1 from '../../assets/images/mes_produits/plat1.png'; // adapte le chemin si besoin

export default function Carte_produit() {
  return (
    <div className="fiche-produit">
      <div className="image-wrapper">
        <img className="plat-img" src={plat1} alt="Mikatés" />
      </div>
      <div className="contenu">
        <p>
          <strong>Mikatés</strong><br/>
          Petits beignets dorés, croustillants à l’extérieur et fondants à l’intérieur.<br/>
          <strong>Portion :</strong> 10 pièces<br/>
          <strong>Parfum :</strong> Nature, Banane, Beurre de cacahuète<br/>
          <strong>Prix :</strong> 5€ les 10 natures | 7€ les 10 aromatisés
        </p>
        
        <div className="boutons">
          <a href="#" className="ajouter">Ajouter</a>
          <Link to="/fiche_produit" className="voir-plus">Voir plus</Link>
        </div>
      </div>
    </div>
  );
}
