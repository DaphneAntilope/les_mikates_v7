// src/pages/Fiche_produit/Fiche_produit.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./fiche_produit.css";

export default function Fiche_produit() {
  const { id } = useParams();               // /description/:id
  const [produit, setProduit] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch('/api/getProduits.php')
      .then((res) => res.json())
      .then((data) => {
        setProduit(data || null);
      })
      .catch((err) => {
        console.error("getProduit error", err);
        setProduit(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ padding: 16 }}>Chargement…</p>;
  if (!produit) return <p style={{ padding: 16 }}>Produit introuvable.</p>;

  // image : si la BDD contient "images/..." on transforme en /images/...
  const imgSrc =
    produit.image && (produit.image.startsWith("/") || produit.image.startsWith("http"))
      ? produit.image
      : produit.image
      ? `/${produit.image.replace(/\\/g, "/")}` // remplace backslashes potentiels
      : "/images/placeholder.png"; // fallback

  return (
    <section className="fiche-produit-section1">
      <div className="fiche-produit-titre">
        <h1>{produit.nom}</h1>
      </div>

      <div className="fiche-produit-img_plat">
        <img src={imgSrc} alt={produit.nom} />
      </div>

      <div className="fiche-produit-texte">
        <h3 dangerouslySetInnerHTML={{ __html: produit.description.replace(/\n/g, "<br/>") }} />
      </div>

      <div className="fiche-produit-info">
        <p><strong>Prix :</strong> {produit.prix} €</p>
        {produit.allergene && <p><strong>Allergènes :</strong> {produit.allergene}</p>}
      </div>

      <div className="fiche-produit-button">
        <button
          onClick={() =>
            addItem({
              id: produit.id_produit,
              nom: produit.nom,
              price: Number(produit.prix),
              image: imgSrc,
            })
          }
        >
          Ajouter au panier
        </button>
      </div>

      <div className="fiche-produit-titre2">
        <h1>Ingrédients</h1>
      </div>

      <div className="fiche-produit-liste_ingredients">
        {produit.ingredients ? (
          <ul>
            {produit.ingredients.split(",").map((ing, i) => (
              <li key={i}>{ing.trim()}</li>
            ))}
          </ul>
        ) : (
          <p>Ingrédients non renseignés</p>
        )}
      </div>

      {produit.allergene && (
        <div className="fiche-produit-texte3">
          <p><strong>Allergènes possibles :</strong></p>
          <p>{produit.allergene}</p>
        </div>
      )}
    </section>
  );
}
