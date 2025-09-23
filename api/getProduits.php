<?php
header("Content-Type: application/json; charset=utf-8");

try {
    $pdo = new PDO("mysql:host=127.0.0.1;dbname=mikate_bdd;charset=utf8mb4","root","");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT id_produit, nom, description, prix, image, allergene, ingredients FROM produit";
    $stmt = $pdo->query($sql);
    $rows = $stmt ? $stmt->fetchAll(PDO::FETCH_ASSOC) : [];

    echo json_encode($rows, JSON_UNESCAPED_UNICODE);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([]); // ✅ jamais null
}
