<?php
include 'koneksi.php';

$judul = $_POST['judul'];
$ringkasan = $_POST['ringkasan'];
$isi = $_POST['isi'];
$gambar = $_FILES['gambar']['name'];
$lokasi = $_FILES['gambar']['tmp_name'];
move_uploaded_file($lokasi, "../images/" . $gambar);

$sql = "INSERT INTO berita (judul, ringkasan, isi, gambar) VALUES ('$judul', '$ringkasan', '$isi', '$gambar')";
$koneksi->query($sql);

header("Location: ../edit-index.html");
