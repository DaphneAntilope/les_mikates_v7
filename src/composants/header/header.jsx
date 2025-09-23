import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import './header.css';
import logo_mikate from '../../assets/images/logos/logo_mikate.png';
import userIcon from '../../assets/images/accueil/union-1.png';
import basketIcon from '../../assets/images/accueil/shopping-basket 1.png';
import headerCorner from '../../assets/images/accueil/image_coin_header.png';

function Header() {
  const [logged, setLogged] = useState(Boolean(localStorage.getItem("user")));

  // Écoute les changements de storage (autres onglets / logout)
  useEffect(() => {
    function onStorage(e) {
      if (e.key === "user") setLogged(Boolean(e.newValue));
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <header>
      <div className="header-container">

        <div className="header-imgcoin">
          <img src={headerCorner} alt="coin décoratif"/>
        </div>

        <nav className="header-lien">
          <ul>
            <li><NavLink to="/mon_histoire">Mon Histoire</NavLink></li>
            <li><NavLink to="/mes_produits">Mes produits</NavLink></li>
            <li><NavLink to="/"><img src={logo_mikate} alt="Logo"/></NavLink></li>
            <li><NavLink to={logged ? "/compte" : "/connexion"}>Commander</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>

            <div className="header-icon">
              {/* lien dynamique : /compte si connecter, sinon /connexion */}
              <NavLink to={logged ? "/compte" : "/connexion"}>
                <img src={userIcon} alt="User" />
              </NavLink>

              <NavLink to="/panier">
                <img src={basketIcon} alt="Panier" />
              </NavLink>
            </div>
          </ul>
        </nav>

        <div className="header-imgcoin" id="imgcoin1">
          <img src={headerCorner} alt="coin décoratif"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
