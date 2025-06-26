<?php
include 'koneksi.php';

if (isset($_POST['tambah_video'])) {
    $nama = $_POST['nama'];
    $file = $_FILES['video']['name'];
    $tmp = $_FILES['video']['tmp_name'];
    move_uploaded_file($tmp, "../videos/" . $file);
    $sql = "INSERT INTO video (nama, file) VALUES ('$nama', '$file')";
    $koneksi->query($sql);
    header("Location: ../edit-index.html");
}
?>
