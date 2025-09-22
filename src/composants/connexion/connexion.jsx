import { Link } from "react-router-dom";
import "./connexion.css";

export default function Form_connexion() {
  return (
    <>
      <div className="card" role="main" aria-labelledby="titre">
          <h1 id="titre" className="title">Connexion</h1>

          <form action="../connexion/config_connexion.php" method="post" encType="multipart/form-data">
            <div className="field">
              <label htmlFor="email">Adresse mail</label>
              <input id="email" name="email" type="email" placeholder="Adresse mail" required autoComplete="email" inputMode="email"/>
            </div>

            <div className="field">
              <label htmlFor="mdp">Mot de passe</label>
              <input id="mdp" name="mdp" type="password" placeholder="Mot de passe" required autoComplete="current-password"/>
            </div>

            <button type="submit">Se connecter</button>
          </form>

          <p>
            Pas encore de compte ?<Link to="/inscription" className="inscription">Inscription</Link>
          </p>
      </div>
   </>
  );
}


