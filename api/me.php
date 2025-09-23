<?php
// api/me.php
header("Content-Type: application/json; charset=utf-8");
session_start();

if (!isset($_SESSION['user'])) {
  http_response_code(401);
  echo json_encode(['ok'=>false,'error'=>'not_authenticated']);
  exit;
}

echo json_encode(['ok'=>true,'user'=>$_SESSION['user']]);
