<!DOCTYPE html>
<html>
<head>
    <title>Tambah Produk</title>
</head>
<body>
    <h2>Tambah Produk Baru</h2>
    <form action="form_create.php" method="POST">
        <label>Nama Produk:</label><br>
        <input type="text" name="nama_product" required><br><br>

        <label>Weight:</label><br>
        <input type="text" name="weight" required><br><br>

        <label>Ash Content:</label><br>
        <input type="text" name="ash_content"><br><br>

        <label>Total Moisture:</label><br>
        <input type="text" name="total_moisture"><br><br>

        <label>Gross Calorific Value:</label><br>
        <input type="text" name="gross_calorific_value"><br><br>

        <label>Burning Time:</label><br>
        <input type="text" name="burning_time"><br><br>

        <label>Packaging:</label><br>
        <input type="text" name="packaging"><br><br>

        <label>Size:</label><br>
        <input type="text" name="size"><br><br>

        <label>Shape:</label><br>
        <input type="text" name="shape"><br><br>

        <button type="submit">Simpan</button>
    </form>
    <br>
    <a href="index.php">Kembali ke Daftar</a>
</body>
</html>
