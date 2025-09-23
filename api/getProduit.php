<?php
header("Content-Type: application/json; charset=utf-8");

try {
    $pdo = new PDO("mysql:host=127.0.0.1;dbname=mikate_bdd;charset=utf8mb4","root","");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $id = intval($_GET['id'] ?? 0);
    $stmt = $pdo->prepare("SELECT id_produit, nom, description, prix, image, allergene, ingredients
                           FROM produit WHERE id_produit = ?");
    $stmt->execute([$id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC) ?: null;

    echo json_encode($row, JSON_UNESCAPED_UNICODE);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(null); // un seul objet attendu côté front
}
