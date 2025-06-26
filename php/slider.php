<?php
include 'koneksi.php';

if (isset($_POST['tambah_slider'])) {
    $gambar = $_FILES['gambar']['name'];
    $tmp = $_FILES['gambar']['tmp_name'];
    move_uploaded_file($tmp, "../images/" . $gambar);
    $sql = "INSERT INTO slider (gambar) VALUES ('$gambar')";
    $koneksi->query($sql);
    header("Location: ../edit-index.html");
}
?>
