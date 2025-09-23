import { useCart } from "react-use-cart";
import './panier.css'

export default function Panier() {
  const { items, updateItemQuantity, removeItem, cartTotal, emptyCart } = useCart();

  return (
    <section className="panier-section1">
      <div className="panier-section1_div1">
        <div className="panier-retour">
          <a href="/mes-produits"><img src="src/assets/images/commander/fleche.png" alt=""/>Retour</a>
        </div>
      </div>

      <div className="panier-titre">
        <h1>Mon panier</h1>
      </div>

      <div className="panier-section1_div2">
        <div className="panier-panier">
          {items.map((item) => (
            <div className="panier-panier_1" key={item.id}>
              <img src={item.image} alt={item.nom}/>
              <div className="panier-panier_1_1">
                <h1>{item.nom}</h1>
                <h1>{item.price} €</h1>
              </div>

              <div className="panier-panier_1_2">
                <div className="panier-quantite">
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  <h1>{item.quantity}</h1>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                </div>

                <div className="panier-poubelle">
                  <button onClick={() => removeItem(item.id)}>
                    <img src="src/assets/images/commander/poubelle.png" alt="Supprimer"/>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="panier-line">
            <img src="src/assets/images/commander/Line_5.png" alt=""/>
          </div>

          <div className="panier-panier_3">
            <button onClick={() => alert("Commande validée 🚀")}>Commander</button>
            <button onClick={emptyCart}>Annuler</button>
            <h1>Total: {cartTotal} €</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
