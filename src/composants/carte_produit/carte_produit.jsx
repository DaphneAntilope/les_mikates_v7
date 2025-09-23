// src/composants/carte_produit/carte_produit.jsx
import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import "./carte_produit.css";

export default function Carte_produit({ produit }) {
  const { addItem, getItem } = useCart();

  if (!produit) return null;

  const itemId = produit.id_produit ?? produit.id ?? produit._id;
  const img = produit.image
    ? `/${String(produit.image).replace(/\\/g, "/")}` // normalise backslashes
    : "/images/placeholder.png";

  const handleAdd = (e) => {
    e.preventDefault(); // juste au cas où on est dans un form
    addItem({
      id: itemId,
      name: produit.nom || produit.name || "Produit",
      price: Number(produit.prix ?? produit.price ?? 0),
      image: img,
    });
  };

  // optionnel : savoir si déjà présent
  const already = getItem(itemId);

  return (
    <div className="fiche-produit">
      <div className="image-wrapper">
        <img className="plat-img" src={img} alt={produit.nom} />
      </div>

      <div className="contenu">
        <p>
          <strong>{produit.nom}</strong><br />
          {produit.description}<br />
          <strong>Prix :</strong> {produit.prix} €
        </p>

        <div className="boutons">
          <button type="button" className="ajouter" onClick={handleAdd}>
            {already ? "Ajouter encore" : "Ajouter"}
          </button>

          {/* Assure-toi que ta route pour la fiche est /description/:id ou adapte ici */}
          <Link to={`/fiche_produit/${itemId}`} className="voir-plus">Voir plus</Link>
        </div>
      </div>
    </div>
  );
}
