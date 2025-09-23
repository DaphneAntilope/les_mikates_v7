import { useState } from "react";
import "./inscription.css";

export default function Inscription() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    mdp: "",
    mdp2: ""
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  function onChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg(null);

    // Validation basique côté client
    if (!form.nom || !form.prenom || !form.email || !form.mdp || !form.mdp2) {
      setMsg({ type: "error", text: "Remplis tous les champs." });
      return;
    }
    if (form.mdp !== form.mdp2) {
      setMsg({ type: "error", text: "Les mots de passe ne correspondent pas." });
      return;
    }
    if (form.mdp.length < 6) {
      setMsg({ type: "error", text: "Le mot de passe doit avoir au moins 6 caractères." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setMsg({ type: "success", text: "Inscription réussie — connecte-toi !" });
        // reset form or redirect to login
        setForm({ nom: "", prenom: "", email: "", mdp: "", mdp2: "" });
        // exemple redirection après 1.5s:
        setTimeout(() => (window.location.href = "/connexion"), 1500);
      } else {
        setMsg({ type: "error", text: data.error || "Erreur inscription" });
      }
    } catch (err) {
      setMsg({ type: "error", text: "Erreur réseau ou serveur." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="card" role="main" aria-labelledby="titre">
      <h1 id="titre" className="title">Inscription</h1>

      {msg && (
        <div className={`message ${msg.type === "error" ? "error" : "success"}`}>
          {msg.text}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="nom">Nom</label>
          <input id="nom" name="nom" type="text" placeholder="Nom" required autoComplete="family-name" value={form.nom} onChange={onChange} />
        </div>

        <div className="field">
          <label htmlFor="prenom">Prénom</label>
          <input id="prenom" name="prenom" type="text" placeholder="Prénom" required autoComplete="given-name" value={form.prenom} onChange={onChange} />
        </div>

        <div className="field">
          <label htmlFor="email">Adresse mail</label>
          <input id="email" name="email" type="email" placeholder="Adresse mail" required autoComplete="email" value={form.email} onChange={onChange} />
        </div>

        <div className="field">
          <label htmlFor="mdp">Mot de passe</label>
          <input id="mdp" name="mdp" type="password" placeholder="Mot de passe" required minLength={6} autoComplete="new-password" value={form.mdp} onChange={onChange} />
        </div>

        <div className="field">
          <label htmlFor="mdp2">Confirmer mot de passe</label>
          <input id="mdp2" name="mdp2" type="password" placeholder="Confirmer mot de passe" required minLength={6} autoComplete="new-password" value={form.mdp2} onChange={onChange} />
        </div>

        <button type="submit" disabled={loading}>{loading ? "Envoi…" : "Inscription"}</button>
      </form>
    </main>
  );
}
