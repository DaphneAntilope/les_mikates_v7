import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./fiche_produit.css";

export default function Fiche_produit() {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const { addItem } = useCart();

  useEffect(() => {
    let stop = false;
    (async () => {
      try {
        setLoading(true);
        setErr("");
        const res = await fetch(`/api/getProduit.php?id=${encodeURIComponent(id)}`);
        const txt = await res.text();
        if (!res.ok) throw new Error(`HTTP ${res.status} – ${txt.slice(0,120)}`);
        const data = txt ? JSON.parse(txt) : null;
        if (!stop) setProduit(data);
      } catch (e) {
        if (!stop) setErr(e.message);
        console.error(e);
      } finally {
        if (!stop) setLoading(false);
      }
    })();
    return () => { stop = true; };
  }, [id]);

  if (loading) return <p style={{ padding: 16 }}>Chargement…</p>;
  if (err)      return <p style={{ padding: 16 }}>Erreur : {err}</p>;
  if (!produit) return <p style={{ padding: 16 }}>Produit introuvable.</p>;

  const imgSrc = produit.image
    ? `/${String(produit.image).replace(/\\/g, "/")}`
    : "/images/placeholder.png";

  return (
    <section className="fiche-produit-section1">
      <div className="fiche-produit-titre"><h1>{produit.nom}</h1></div>

      <div className="fiche-produit-img_plat">
        <img src={imgSrc} alt={produit.nom} />
      </div>

      <div className="fiche-produit-texte">
        <h3 dangerouslySetInnerHTML={{
          __html: (produit.description || "").replace(/\n/g, "<br/>")
        }} />
      </div>

    <div className="fiche-produit-prix">
        <p><strong>Prix :</strong> {produit.prix} €</p>
    </div>

      <div className="fiche-produit-button">
        <button
          onClick={() => addItem({
            id: produit.id_produit,
            nom: produit.nom,
            price: Number(produit.prix),
            image: imgSrc,
          })}
        >
          Ajouter au panier
        </button>
      </div>

      <div className="fiche-produit-titre2"><h1>Ingrédients</h1></div>
      <div className="fiche-produit-liste_ingredients">
        {produit.ingredients
          ? <ul>{produit.ingredients.split(",").map((x,i)=><li key={i}>{x.trim()}</li>)}</ul>
          : <p>Ingrédients non renseignés</p>}
      </div>

    <div className="fiche-produit-texte3">
        {produit.allergene && <p><strong>Allergènes :<br/>
        </strong> {produit.allergene}</p>}
      </div>
    </section>
  );
}
