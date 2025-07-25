<?php
include 'config.php';
$id = $_GET['id'];

$query = "DELETE FROM product WHERE id = $id";

if (mysqli_query($conn, $query)) {
    header("Location: index.php");
    exit;
} else {
    echo "Gagal menghapus data: " . mysqli_error($conn);
}
?>
