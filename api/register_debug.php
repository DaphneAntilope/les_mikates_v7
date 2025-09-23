<?php
// api/register_debug.php  — DEBUG DEV ONLY
header("Content-Type: application/json; charset=utf-8");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

try {
    $pdo = new PDO("mysql:host=127.0.0.1;dbname=mikate_bdd;charset=utf8mb4", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupération body (JSON ou POST)
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true) ?? $_POST;

    $nom    = trim($data['nom'] ?? '');
    $prenom = trim($data['prenom'] ?? '');
    $email  = trim($data['email'] ?? '');
    $mdp    = $data['mdp'] ?? '';
    $mdp2   = $data['mdp2'] ?? '';

    if (!$nom || !$prenom || !$email || !$mdp || !$mdp2) {
        http_response_code(400);
        echo json_encode(['ok'=>false,'error'=>'Tous les champs requis']); exit;
    }
    if ($mdp !== $mdp2) {
        http_response_code(400);
        echo json_encode(['ok'=>false,'error'=>'Les mots de passe ne correspondent pas']); exit;
    }

    // doublon
    $stmt = $pdo->prepare("SELECT id_utilisateur FROM utilisateur WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        http_response_code(409);
        echo json_encode(['ok'=>false,'error'=>'Email déjà utilisé']); exit;
    }

    $hash = password_hash($mdp, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare("INSERT INTO utilisateur (nom, prenom, pseudo, mot_de_passe, email, avatar, role) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $pseudo = "";
    $avatar = "";
    $role = "utilisateur";

    $stmt->execute([$nom, $prenom, $pseudo, $hash, $email, $avatar, $role]);

    echo json_encode(['ok'=>true, 'id'=>$pdo->lastInsertId()]);
    exit;

} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'Erreur serveur (DB).',
        'exception' => $e->getMessage()
    ]);
    exit;
}
