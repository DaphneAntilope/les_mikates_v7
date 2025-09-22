import './mes_produits.css'

import Carte_produit from '../../composants/carte_produit/carte_produit.jsx';

export default function MesProduits() {
    return (
        <>
        <section className="mes-produits-section1">
            <div className="video_container">
            <video autoPlay loop muted src="src/assets/images/mes_produits/142984-781314616_medium.mp4"></video>
            </div>
        </section>

        <section className="mes-produits-section2">
            <div className="titre">
            <h1>Les plats</h1>
            </div>

            <div className="mes-produits-section2_div">
                <Carte_produit />
                <Carte_produit />
                <Carte_produit />
            </div>
        </section>

        <section className="mes-produits-section3">
            <div className="mes-produits-section3_text">
            <h1>D’autres produits seront disponibles prochainement ...</h1>
            </div>
            <div className="fond_box">
            <div className="text_box">
                <h1>Découvrez aussi votre box spécial <br/>
                    barbecue de poulet mariné <br/>
                    cuit ou cru à vous de choisir !
                </h1>
                <a href="">Voir plus</a>
            </div>
            <img src="src/assets/images/mes_produits\boite.png" alt=""/>
            </div>
        </section>
        </>
    )
}