import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const [ok, setOk] = useState(null);
  const loc = useLocation();

  useEffect(() => {
    const local = localStorage.getItem("user");
    if (local) { setOk(true); return; }
    // si tu veux vérifier via API, faire /api/me
    fetch("/api/me.php", { credentials: 'include' })
      .then(r => r.json())
      .then(d => setOk(d.ok))
      .catch(() => setOk(false));
  }, []);

  if (ok === null) return <p>Chargement...</p>;
  if (!ok) return <Navigate to="/connexion" state={{ from: loc }} replace />;
  return children;
}
