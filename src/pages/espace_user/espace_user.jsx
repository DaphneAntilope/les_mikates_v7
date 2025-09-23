// src/pages/EspaceUser/EspaceUser.jsx
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userAvatar from "../../assets/images/utilisateur/man 1.png"; // adapte le chemin réel
import "./espace_user.css";

export default function EspaceUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("infos"); // infos | commandes | favoris
  const navigate = useNavigate();

  useEffect(() => {
    // méthode recommandée : /api/me renvoie l'user si session existante
    // fallback : localStorage (si tu le stockes à la connexion)
    let mounted = true;
    (async () => {
      try {
        // 1) essayer localStorage d'abord (fast)
        const local = localStorage.getItem("user");
        if (local) {
          const parsed = JSON.parse(local);
          if (mounted) setUser(parsed);
        }
        // 2) confirmer côté serveur (session)
        const res = await fetch("/api/me.php", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          if (data.ok && mounted) {
            setUser(data.user);
            localStorage.setItem("user", JSON.stringify(data.user));
          } else if (mounted && !local) {
            // pas d'user côté serveur -> redirection vers login
            navigate("/connexion");
          }
        } else if (!local) {
          navigate("/connexion");
        }
      } catch (e) {
        console.error("me fetch error", e);
        // si rien en local, we redirect to login
        if (!localStorage.getItem("user")) navigate("/connexion");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, [navigate]);

  async function handleLogout() {
    try {
      // appeler logout PHP pour détruire la session
      await fetch("/api/logout.php", {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {
      console.warn("logout failed", e);
    } finally {
      localStorage.removeItem("user");
      navigate("/"); // redirige vers accueil
    }
  }

  if (loading) return <p className="eu-loading">Chargement...</p>;
  if (!user) return null; // déjà redirigé

  return (
    <div className="eu-page">
      <div className="eu-titre"><h1>Mon compte</h1></div>

      <div className="eu-content">
        <aside className="eu-menu">
          <div className="eu-avatar">
            <img src={user.avatar ? `/${user.avatar.replace(/\\/g,"/")}` : userAvatar} alt="avatar" />
            <div className="eu-nom">{user.prenom} {user.nom}</div>
            <div className="eu-mail">{user.email}</div>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="#" onClick={() => setActiveTab("infos")} className={activeTab === "infos" ? "active" : ""}>
                  Informations générales
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => setActiveTab("commandes")} className={activeTab === "commandes" ? "active" : ""}>
                  Mes commandes
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => setActiveTab("favoris")} className={activeTab === "favoris" ? "active" : ""}>
                  Mes plats favoris
                </NavLink>
              </li>
              <li>
                <button className="eu-logout" onClick={handleLogout}>Déconnexion</button>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="eu-main">
          {activeTab === "infos" && (
            <section className="eu-infos">
              <h2>Informations générales</h2>
              <p><strong>Nom :</strong> {user.nom}</p>
              <p><strong>Prénom :</strong> {user.prenom}</p>
              <p><strong>Email :</strong> {user.email}</p>
              <p><strong>Rôle :</strong> {user.role}</p>
              {/* Ici tu peux ajouter un formulaire pour modifier profil */}
            </section>
          )}

          {activeTab === "commandes" && (
            <section className="eu-commandes">
              <h2>Mes commandes</h2>
              {/* Exemple statique : tu devrais fetch('/api/commandes?userId=...') */}
              <div className="eu-commandes-list">
                <div className="eu-box">
                  <h3>Rougail saucisse</h3>
                  <p className="statut en-cours">En cours</p>
                  <p className="date">lundi 24 juin 2025</p>
                </div>
                <div className="eu-box">
                  <h3>Kari poulet</h3>
                  <p className="statut livree">Livrée</p>
                  <p className="date">mercredi 12 juin 2025</p>
                </div>
                {/* ... */}
              </div>
            </section>
          )}

          {activeTab === "favoris" && (
            <section className="eu-favoris">
              <h2>Mes plats favoris</h2>
              <p>Liste vide pour le moment — ajoute des favoris depuis les fiches produits.</p>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
