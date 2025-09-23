import './carrousel.css';
import AnimatedButton from '../../assets/animations/AnimatedButton.jsx';

import { motion } from "framer-motion";
import bg from "/src/assets/images/accueil/cercle.png";

export default function Carrousel() {
  return (
    <>
      <section className="section11">
              <motion.img
                src={bg}
                alt=""
                className="bg-carrousel"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />

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