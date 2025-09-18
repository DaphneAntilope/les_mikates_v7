import './header.css'
import '../../assets/fonts/fonts.css'; //importation des typographie de la page
import '../../assets/generales/generales.css'; //importation des typographie de la page
import logo_mikate from '../../assets/images/logos/logo_mikate.png'; //header.jsx → dossier header → ../ donne src/composants/ → ../ donne src/ → puis assets/....




function Header() {
    return(
        <header>
    <div class="container">

    <div class="imgcoin">
      <img src="src/assets/images/accueil/image_coin_header.png" alt=""/>
    </div>

    <nav class="lien">
      <ul>
        <li><a href="../mon_histoire/mon_histoire.php">Mon Histoire</a></li>
        <li><a href="../mes_produits/mes_produits.php">Mes produits</a></li>
        <li><a href="../index.php"><img src={logo_mikate} alt=""/></a></li>
        <li><a href="../commander/commander.php">Commander</a></li>
        <li><a href="../contact/contact.php">Contact</a></li>
        <div class="icon">
        <a href="../connexion/se_connecter.php"><img src="src/assets/images/accueil/union-1.png" alt=""/></a>
        <a href="../commander/commander.php"><img src="src/assets/images/accueil/shopping-basket 1.png" alt=""/></a>
    </div>
      </ul>
    </nav>

    

    <div class="imgcoin" id="imgcoin1">
      <img src="src/assets/images/accueil/image_coin_header.png" alt=""/>
    </div>
  </div>
  </header>
    );
}

export default Header;