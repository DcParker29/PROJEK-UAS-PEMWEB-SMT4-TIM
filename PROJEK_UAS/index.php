<?php
include 'config.php';

// Ambil semua data produk
$query = "SELECT * FROM product ORDER BY id DESC";
$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Daftar Produk</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
            vertical-align: top;
        }

        th {
            background-color: #f4f4f4;
        }

        h2 {
            margin-top: 20px;
        }

        a.tambah-btn {
            display: inline-block;
            margin-top: 10px;
            margin-bottom: 10px;
            padding: 8px 12px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 4px;
        }

        a.edit, a.hapus {
            margin-right: 5px;
        }

        .product-img {
            max-width: 100px;
            height: auto;
        }
    </style>
</head>
<body>

<h2>Daftar Produk</h2>
<a class="tambah-btn" href="form_create_product.php">+ Tambah Produk</a>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nama Produk</th>
            <th>Weight</th>
            <th>Ash Content</th>
            <th>Total Moisture</th>
            <th>Gross Calorific Value</th>
            <th>Burning Time</th>
            <th>Packaging</th>
            <th>Size</th>
            <th>Shape</th>
            <th>Gambar</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
        <?php while ($row = mysqli_fetch_assoc($result)) : ?>
        <tr>
            <td><?= $row['id'] ?></td>
            <td><?= htmlspecialchars($row['nama_product']) ?></td>
            <td><?= htmlspecialchars($row['weight']) ?></td>
            <td><?= htmlspecialchars($row['ash_content']) ?></td>
            <td><?= htmlspecialchars($row['total_moisture']) ?></td>
            <td><?= htmlspecialchars($row['gross_calorific_value']) ?></td>
            <td><?= htmlspecialchars($row['burning_time']) ?></td>
            <td><?= htmlspecialchars($row['packaging']) ?></td>
            <td><?= htmlspecialchars($row['size']) ?></td>
            <td><?= htmlspecialchars($row['shape']) ?></td>
            <td>
                <?php if (!empty($row['image_url'])): ?>
                    <img src="<?= $row['image_url'] ?>" alt="Gambar Produk" class="product-img">
                <?php else: ?>
                    <em>Belum ada gambar</em>
                <?php endif; ?>
            </td>
            <td>
                <a class="edit" href="form_edit_product.php?id=<?= $row['id'] ?>">Edit</a>
                <a class="hapus" href="delete.php?id=<?= $row['id'] ?>" onclick="return confirm('Yakin ingin menghapus?')">Hapus</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </tbody>
</table>

</body>
</html>
