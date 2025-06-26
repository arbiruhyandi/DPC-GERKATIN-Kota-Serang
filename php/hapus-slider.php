<?php
if (isset($_POST['gambar'])) {
    $gambar = $_POST['gambar'];
    $path = "../" . $gambar;
    if (file_exists($path)) {
        unlink($path);
    }
}
header("Location: ../edit-index.html");
?>
