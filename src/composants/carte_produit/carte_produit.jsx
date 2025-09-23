import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import "./carte_produit.css";

export default function Carte_produit({ produit }) {
  const { addItem } = useCart();

  return (
    <div className="fiche-produit">
      <div className="image-wrapper">
        <img
          className="plat-img"
          src={`/${produit.image}`} // chemin depuis ta BDD
          alt={produit.nom}
        />
      </div>
      <div className="contenu">
        <p>
          <strong>{produit.nom}</strong><br />
          {produit.description}<br />
          <strong>Prix :</strong> {produit.prix} €
        </p>

        <div className="boutons">
          <button
            className="ajouter"
            onClick={() =>
              addItem({
                id: produit.id_produit,
                nom: produit.nom,
                price: produit.prix,
                image: produit.image,
              })
            }
          >
            Ajouter
          </button>
          <Link to={`/fiche_produit/${produit.id_produit}`} className="voir-plus">Voir plus</Link>
        </div>
      </div>
    </div>
  );
}
