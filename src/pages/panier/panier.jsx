import { useCart } from "react-use-cart";

export default function Panier() {
  const { items, updateItemQuantity, removeItem, cartTotal, emptyCart } = useCart();

  return (
    <section className="section1">
      <div className="section1_div1">
        <div className="retour">
          <a href="/mes-produits"><img src="/images/commander/fleche.png" alt=""/>Retour</a>
        </div>
      </div>

      <div className="titre">
        <h1>Mon panier</h1>
      </div>

      <div className="section1_div2">
        <div className="panier">
          {items.map((item) => (
            <div className="panier_1" key={item.id}>
              <img src={item.image} alt={item.nom}/>
              <div className="panier_1_1">
                <h1>{item.nom}</h1>
                <h1>{item.price} €</h1>
              </div>

              <div className="panier_1_2">
                <div className="quantite">
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  <h1>{item.quantity}</h1>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                </div>

                <div className="poubelle">
                  <button onClick={() => removeItem(item.id)}>
                    <img src="/images/commander/poubelle.png" alt="Supprimer"/>
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="line">
            <img src="/images/commander/Line_5.png" alt=""/>
          </div>

          <div className="panier_3">
            <button onClick={() => alert("Commande envoyée 🚀")}>Commander</button>
            <button onClick={emptyCart}>Annuler</button>
            <h1>Total: {cartTotal} €</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
