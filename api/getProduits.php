<?php
header("Content-Type: application/json");
$pdo = new PDO("mysql:host=127.0.0.1;dbname=mikate_bdd;charset=utf8mb4","root","");

$id = intval($_GET['id'] ?? 0);
$stmt = $pdo->prepare("SELECT * FROM produit WHERE id_produit = ?");
$stmt->execute([$id]);
$produit = $stmt->fetch(PDO::FETCH_ASSOC);

echo json_encode($produit ?: null);
