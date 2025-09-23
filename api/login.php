<?php
// api/login.php
header("Content-Type: application/json; charset=utf-8");
// en dev, si tu n'utilises pas le proxy Vite, active CORS (voir commentaires précédents)
// header("Access-Control-Allow-Origin: http://localhost:5173");
// header("Access-Control-Allow-Methods: POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

try {
    // connexion PDO
    $pdo = new PDO("mysql:host=127.0.0.1;dbname=mikate_bdd;charset=utf8mb4", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    if (!is_array($data)) $data = $_POST; // fallback

    $email = trim($data['email'] ?? '');
    $mdp   = $data['mdp'] ?? '';

    if (!$email || !$mdp) {
        http_response_code(400);
        echo json_encode(['ok'=>false,'error'=>'Email et mot de passe requis']);
        exit;
    }

    // récupérer l'utilisateur
    $stmt = $pdo->prepare("SELECT id_utilisateur, nom, prenom, mot_de_passe, role FROM utilisateur WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        http_response_code(401);
        echo json_encode(['ok'=>false,'error'=>'Identifiants invalides']);
        exit;
    }

    // vérifier le mot de passe
    if (!password_verify($mdp, $user['mot_de_passe'])) {
        http_response_code(401);
        echo json_encode(['ok'=>false,'error'=>'Identifiants invalides']);
        exit;
    }

    // démarrer la session (optionnel mais utile)
    session_start();
    session_regenerate_id(true);
    $_SESSION['user'] = [
      'id' => (int)$user['id_utilisateur'],
      'nom' => $user['nom'],
      'prenom' => $user['prenom'],
      'role' => $user['role']
    ];

    // renvoyer les infos utiles (ne PAS renvoyer le hash du mot de passe)
    echo json_encode([
      'ok' => true,
      'user' => [
        'id' => (int)$user['id_utilisateur'],
        'nom' => $user['nom'],
        'prenom' => $user['prenom'],
        'role' => $user['role']
      ]
    ]);
    exit;

} catch (Throwable $e) {
    http_response_code(500);
    // en dev tu peux renvoyer $e->getMessage() ; en prod afficher un message générique
    echo json_encode(['ok'=>false,'error'=>'Erreur serveur.']);
    exit;
}
