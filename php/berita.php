<?php
include 'koneksi.php';

if (isset($_POST['tambah_berita'])) {
    $judul = $_POST['judul'];
    $ringkasan = $_POST['ringkasan'];
    $isi = $_POST['isi'];
    $gambar = $_FILES['gambar']['name'];
    $tmp = $_FILES['gambar']['tmp_name'];
    move_uploaded_file($tmp, "../images/" . $gambar);
    $sql = "INSERT INTO berita (judul, ringkasan, isi, gambar) VALUES ('$judul', '$ringkasan', '$isi', '$gambar')";
    $koneksi->query($sql);
    header("Location: ../edit-index.html");
}
?>
