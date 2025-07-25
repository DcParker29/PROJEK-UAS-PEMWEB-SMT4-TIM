<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama = $_POST['nama_product'];
    $weight = $_POST['weight'];
    $ash = $_POST['ash_content'];
    $moisture = $_POST['total_moisture'];
    $calorific = $_POST['gross_calorific_value'];
    $burning = $_POST['burning_time'];
    $packaging = $_POST['packaging'];
    $size = $_POST['size'];
    $shape = $_POST['shape'];

    $query = "INSERT INTO product (
        nama_product, weight, ash_content, total_moisture, gross_calorific_value,
        burning_time, packaging, size, shape
    ) VALUES (
        '$nama', '$weight', '$ash', '$moisture', '$calorific',
        '$burning', '$packaging', '$size', '$shape'
    )";

    if (mysqli_query($conn, $query)) {
        header("Location: index.php");
        exit;
    } else {
        echo "Gagal menyimpan data: " . mysqli_error($conn);
    }
}
?>
