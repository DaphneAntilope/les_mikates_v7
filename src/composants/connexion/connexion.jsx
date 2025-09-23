import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./connexion.css";

export default function Connexion() {
  const [form, setForm] = useState({ email: "", mdp: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg(null);

    if (!form.email || !form.mdp) {
      setMsg({ type: "error", text: "Remplis tous les champs." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // credentials: 'include', // décommente si tu dois utiliser les cookies de session sans proxy
        body: JSON.stringify({ email: form.email, mdp: form.mdp })
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setMsg({ type: "error", text: data.error || "Erreur de connexion" });
      } else {
        // Connexion réussie → stocker user en localStorage ou contexte
        localStorage.setItem("user", JSON.stringify(data.user));
        setMsg({ type: "success", text: "Connecté — redirection..." });
        setTimeout(() => navigate("/compte"), 900); // ou vers la page profil
      }
    } catch (err) {
      console.error(err);
      setMsg({ type: "error", text: "Erreur réseau." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card" role="main" aria-labelledby="titre">
      <h1 id="titre" className="title">Connexion</h1>

      {msg && <div className={`message ${msg.type}`}>{msg.text}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="email">Adresse mail</label>
          <input id="email" name="email" type="email" placeholder="Adresse mail" required autoComplete="email" value={form.email} onChange={onChange} />
        </div>

        <div className="field">
          <label htmlFor="mdp">Mot de passe</label>
          <input id="mdp" name="mdp" type="password" placeholder="Mot de passe" required autoComplete="current-password" value={form.mdp} onChange={onChange} />
        </div>

        <button type="submit" disabled={loading}>{loading ? "Connexion…" : "Se connecter"}</button>
      </form>

      <p>Pas encore de compte ? <Link to="/inscription">Inscription</Link></p>
    </div>
  );
}
