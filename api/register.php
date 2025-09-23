<?php
// En dev, tu peux autoriser ton front (ou utiliser le proxy Vite)
// header("Access-Control-Allow-Origin: http://localhost:5173");
// header("Access-Control-Allow-Methods: POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

header("Content-Type: application/json; charset=utf-8");

try {
    // Connexion PDO (adapter user/password si besoin)
    $pdo = new PDO("mysql:host=127.0.0.1;dbname=mikate_bdd;charset=utf8mb4", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer le body (support JSON ou form-encoded)
    $raw = file_get_contents('php://input');
    $data = [];
    if (!empty($raw)) {
        $json = json_decode($raw, true);
        if (json_last_error() === JSON_ERROR_NONE && is_array($json)) {
            $data = $json;
        } else {
            // si ce n'est pas JSON on laisse $data vide, puis on peut fallback to $_POST
            $data = $_POST;
        }
    } else {
        $data = $_POST;
    }

    // Validation basique
    $nom    = trim($data['nom']    ?? '');
    $prenom = trim($data['prenom'] ?? '');
    $email  = trim($data['email']  ?? '');
    $mdp    = $data['mdp'] ?? '';
    $mdp2   = $data['mdp2'] ?? '';

    if (!$nom || !$prenom || !$email || !$mdp || !$mdp2) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Tous les champs sont requis.']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Adresse e-mail invalide.']);
        exit;
    }

    if ($mdp !== $mdp2) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Les mots de passe ne correspondent pas.']);
        exit;
    }

    if (strlen($mdp) < 6) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Le mot de passe doit contenir au moins 6 caractères.']);
        exit;
    }

    // Vérifier doublon email (et éventuellement pseudo)
    $stmt = $pdo->prepare("SELECT id_utilisateur FROM utilisateur WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        http_response_code(409);
        echo json_encode(['ok' => false, 'error' => 'Cette adresse e-mail est déjà utilisée.']);
        exit;
    }

    // Si tu utilises un pseudo (non requis dans ton form actuel), vérifier aussi

    // Hacher le mot de passe (utilise bcrypt/argon automatiquement selon PHP)
    $hash = password_hash($mdp, PASSWORD_DEFAULT);
    if ($hash === false) {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => "Erreur de chiffrement du mot de passe."]);
        exit;
    }

    // Insertion — avatar vide par défaut, role 'utilisateur'
    $stmt = $pdo->prepare("INSERT INTO utilisateur (nom, prenom, pseudo, mot_de_passe, email, avatar, role) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $pseudo = null; // si tu veux générer un pseudo automatique ou ajouter champ later
    $avatar = ""; // à gérer plus tard si upload d'avatar
    $role = "utilisateur";

    $stmt->execute([$nom, $prenom, $pseudo, $hash, $email, $avatar, $role]);
    $newId = $pdo->lastInsertId();

    echo json_encode(['ok' => true, 'id' => $newId, 'message' => 'Inscription réussie']);
    exit;

} catch (PDOException $e) {
    http_response_code(500);
    // Ne pas renvoyer $e->getMessage() en prod — utile en dev
    echo json_encode(['ok' => false, 'error' => 'Erreur serveur (DB).']);
    exit;
}
