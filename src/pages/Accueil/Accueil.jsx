import './Accueil.css'

import Carrousel from '../../composants/carrousel/carrousel.jsx';
import Avis_client from '../../composants/avis_client/avis_client.jsx';

export default function Accueil() {
  return (
      <>
      <main>

        <section className="accueil-section1">
            <div>
                <h1>Bienvenue dans ma cuisine,<br/>
                    là où les saveurs d'Afrique se <br/> 
                    racontent dans chaque <br/>
                    assiette.</h1>
            </div>
        </section>

        {/* Section 2 */}
        <section className="accueil-section2">
          <div className="accueil-section2-text">
            <h1>De délicieuses recettes, faites <br/>
                maison, authentiques <br/>
                et livrées chez vous</h1>
          </div>
          
          <div>
              <img src="src/assets/images/accueil/8 3.png" alt=""/>
              <img src="src/assets/images/accueil/4 3.png" alt=""/>
              <img src="src/assets/images/accueil/WhatsApp Image 2025-06-01 at 18.59.20 3.png" alt=""/>

              <div className="image_accueil">

              </div>
          </div>

          <div className="button">
              <a href="../mes_produits/mes_produits.php"><button className="button_plat">Découvrez nos plats</button></a>
          </div>
        </section>

        {/* Section 3 */}

        <section className="accueil-section3">
          <div className="img">
            <img src="src/assets/images/accueil/photo_betti.png" alt=""/>
          </div>

          <div className="text2">
            <h1>Dans chaque plat, un morceau d’histoire</h1>
            <br/>
            <br/>
            <h3>C’est avec amour, patience et passion que je perpétue les <br/>
                recettes traditionnelles africaines transmises par ma <br/>
                mère et ma grand-mère. Chaque cuillère raconte une <br/>
                histoire, chaque assiette invite au voyage.</h3>
                <br/>
                <br/>
            <a href="../mon_histoire/mon_histoire.php" className="btn-section3">A propos</a>
          </div>

          <div className="image_accueil1">
          </div>
        </section>

        {/* Section 4 */}

        <section id="accueil-section4">
              <Carrousel />
        </section>

        {/* Section 6 */}
        <section id="accueil-section6">
              <Avis_client />
              <Avis_client />
              <Avis_client />
        </section>
      </main>

      </>
  )
};