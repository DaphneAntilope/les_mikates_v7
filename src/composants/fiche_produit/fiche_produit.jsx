import "./fiche_produit.css";

export default function Fiche_produit () {
    return (
    <>
        <section className="fiche-produit-section1">
            <div className="fiche-produit-titre">
            <h1>Description du plat</h1>
            </div>

            <div className="fiche-produit-img_plat">
                <img src="src\assets\images\mes_produits\plat1.png" alt=""/>
            </div>

            <div className="fiche-produit-texte">
            <h3>C’est un plat emblématique de la cuisine congolaise,<br/>
                simple, nourrissant et très apprécié pour sa richesse en goût.<br/>
                Le mot "Madesu" vient du lingala et signifie "haricots".<br/>
                Il était souvent cuisiné lors des grandes réunions de<br/>
                famille ou des fêtes populaires, car il pouvait être <br/>
                préparé en grande quantité et nourrir beaucoup de monde<br/>
            </h3>
            </div>

            <div className="fiche-produit-button">
            <button>Ajouter au panier</button>
            </div>

            <div className="fiche-produit-titre2">
            <h1>Ingredients</h1>
            </div>

            <div className="fiche-produit-liste_ingredients">
                <ul>
                    <li>Haricots rouges ou blanc</li> <br/>
                    <li>Tomates fraîches ou concentré de tomate</li> <br/>
                    <li>Oignons</li> <br/>
                    <li>Ail</li><br/>
                    <li>Huile végétale</li><br/>
                    <li>Sel, Poivre</li><br/>
                </ul> 
            </div>

            <div className="fiche-produit-texte3">
                <p>Allergène Possibles dans le Madesu</p><br/>
                <p>Légumineuses (Haricots rouges / blancs) /Ail / Oignon</p>
            </div>
        </section>
    </>
    );
}