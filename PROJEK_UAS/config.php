<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "company_profile";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
