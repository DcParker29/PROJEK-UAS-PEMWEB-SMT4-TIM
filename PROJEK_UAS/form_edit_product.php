<?php
include 'config.php';
$id = $_GET['id'];
$result = mysqli_query($conn, "SELECT * FROM product WHERE id=$id");
$data = mysqli_fetch_assoc($result);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Produk</title>
</head>
<body>
    <h2>Edit Produk</h2>
    <form action="update.php" method="POST">
        <input type="hidden" name="id" value="<?= $data['id'] ?>">

        <label>Nama Produk:</label><br>
        <input type="text" name="nama_product" value="<?= $data['nama_product'] ?>" required><br><br>

        <label>Weight:</label><br>
        <input type="text" name="weight" value="<?= $data['weight'] ?>"><br><br>

        <label>Ash Content:</label><br>
        <input type="text" name="ash_content" value="<?= $data['ash_content'] ?>"><br><br>

        <label>Total Moisture:</label><br>
        <input type="text" name="total_moisture" value="<?= $data['total_moisture'] ?>"><br><br>

        <label>Gross Calorific Value:</label><br>
        <input type="text" name="gross_calorific_value" value="<?= $data['gross_calorific_value'] ?>"><br><br>

        <label>Burning Time:</label><br>
        <input type="text" name="burning_time" value="<?= $data['burning_time'] ?>"><br><br>

        <label>Packaging:</label><br>
        <input type="text" name="packaging" value="<?= $data['packaging'] ?>"><br><br>

        <label>Size:</label><br>
        <input type="text" name="size" value="<?= $data['size'] ?>"><br><br>

        <label>Shape:</label><br>
        <input type="text" name="shape" value="<?= $data['shape'] ?>"><br><br>

        <label>Link Gambar (image_url):</label><br>
        <input type="text" name="image_url" value="<?= $data['image_url'] ?>"><br><br>

        <button type="submit">Update</button>
    </form>
    <br>
    <a href="index.php">Kembali ke Daftar</a>
</body>
</html>
