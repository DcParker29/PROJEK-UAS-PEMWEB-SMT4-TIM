<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $nama = $_POST['nama_product'];
    $weight = $_POST['weight'];
    $ash = $_POST['ash_content'];
    $moisture = $_POST['total_moisture'];
    $calorific = $_POST['gross_calorific_value'];
    $burning = $_POST['burning_time'];
    $packaging = $_POST['packaging'];
    $size = $_POST['size'];
    $shape = $_POST['shape'];
    $image_url = $_POST['image_url'];

    $query = "UPDATE product SET 
        nama_product = '$nama',
        weight = '$weight',
        ash_content = '$ash',
        total_moisture = '$moisture',
        gross_calorific_value = '$calorific',
        burning_time = '$burning',
        packaging = '$packaging',
        size = '$size',
        shape = '$shape',
        image_url = '$image_url'
        WHERE id = $id";

    if (mysqli_query($conn, $query)) {
        header("Location: index.php");
        exit;
    } else {
        echo "Gagal update data: " . mysqli_error($conn);
    }
}
?>
