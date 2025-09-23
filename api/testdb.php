<?php
try {
  $pdo = new PDO("mysql:host=127.0.0.1;dbname=mikate_bdd;charset=utf8mb4","root","");
  echo "OK DB ". $pdo->getAttribute(PDO::ATTR_CONNECTION_STATUS);
} catch (PDOException $e) {
  echo "ERR: " . $e->getMessage();
}
