import { NavLink, Link } from 'react-router-dom';

import './header.css';
import '../../assets/fonts/fonts.css'; //importation des typographie de la page
import '../../assets/generales/generales.css'; //importation des typographie de la page
import logo_mikate from '../../assets/images/logos/logo_mikate.png'; //header.jsx → dossier header → ../ donne src/composants/ → ../ donne src/ → puis assets/....




function Header() {
    return(
        <header>
    <div className="container">

    <div className="imgcoin">
      <img src="src/assets/images/accueil/image_coin_header.png" alt=""/>
    </div>

    <nav className="lien">
      <ul>
        <li><NavLink to="/mon_histoire">Mon Histoire</NavLink></li>
        <li><NavLink to="../mes_produits/mes_produits.php">Mes produits</NavLink></li>
        <li><NavLink to="../index.php"><img src={logo_mikate} alt=""/></NavLink></li>
        <li><NavLink to="../commander/commander.php">Commander</NavLink></li>
        <li><NavLink to="../contact/contact.php">Contact</NavLink></li>
        <div className="icon">
        <NavLink to="../connexion/se_connecter.php"><img src="src/assets/images/accueil/union-1.png" alt=""/></NavLink>
        <NavLink to="../commander/commander.php"><img src="src/assets/images/accueil/shopping-basket 1.png" alt=""/></NavLink>
    </div>
      </ul>
    </nav>

    

    <div className="imgcoin" id="imgcoin1">
      <img src="src/assets/images/accueil/image_coin_header.png" alt=""/>
    </div>
  </div>
  </header>
    );
}

export default Header;