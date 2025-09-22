import { NavLink, Link } from 'react-router-dom';

import './header.css';
import logo_mikate from '../../assets/images/logos/logo_mikate.png'; //header.jsx → dossier header → ../ donne src/composants/ → ../ donne src/ → puis assets/....




function Header() {
    return(
        <header>
    <div className="header-container">

    <div className="header-imgcoin">
      <img src="src/assets/images/accueil/image_coin_header.png" alt=""/>
    </div>

    <nav className="header-lien">
      <ul>
        <li><NavLink to="/mon_histoire">Mon Histoire</NavLink></li>
        <li><NavLink to="/mes_produits">Mes produits</NavLink></li>
        <li><NavLink to="/"><img src={logo_mikate} alt=""/></NavLink></li>
        <li><NavLink to="/commander">Commander</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <div className="header-icon">
        <NavLink to="/connexion"><img src="src/assets/images/accueil/union-1.png" alt=""/></NavLink>
        <NavLink to="../commander/commander.php"><img src="src/assets/images/accueil/shopping-basket 1.png" alt=""/></NavLink>
    </div>
      </ul>
    </nav>

    

    <div className="header-imgcoin" id="imgcoin1">
      <img src="src/assets/images/accueil/image_coin_header.png" alt=""/>
    </div>
  </div>
  </header>
    );
}

export default Header;