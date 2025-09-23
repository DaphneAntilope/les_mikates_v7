import './carrousel.css';
import AnimatedButton from '../../assets/animations/AnimatedButton.jsx';

export default function Carrousel() {
  return (
    <>
      <section className="section11">
        <div className="image-accueil2"></div>

        <div className="image-accueil3">
          <img src="/src/assets/images/accueil/plat2.png" alt="Plat 2" />
          <img src="/src/assets/images/accueil/plat1.png" alt="Plat 1" />
          <img src="/src/assets/images/accueil/plat3.png" alt="Plat 3" />
        </div>
      </section>

      <section className="section12">
       <AnimatedButton as="a" href="../mes_produits/mes_produits.php" className="button_plat">Commandez maintenant !</AnimatedButton>
      </section>
    </>
  );
}