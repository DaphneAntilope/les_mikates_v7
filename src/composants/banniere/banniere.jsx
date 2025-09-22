import './banniere.css';

function Banniere() {
    return (
        <section className="banniere-section4">
        <div className="banniere-section4_img1">
            <img src="../src/assets/images/mon_histoire/pot_deco.png" alt=""/>
        </div>

        <div className="banniere-section4_div">
            <h1>Une question ? <br/>
               Une commande spéciale ?

            </h1>
               <h3>
                    Contactez moi je serais ravie de <br/>
                    vous répondre !
               </h3>

               <a href="../contact\contact.php">Me contacter</a>

        </div>

        <div className="banniere-section4_img2">
            <img src="../src/assets/images/mon_histoire/assiette_deco.png" alt=""/>
        </div>
    </section>
    );
}

export default Banniere;