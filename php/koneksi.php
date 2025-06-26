<?php
$koneksi = new mysqli("localhost", "root", "", "gerkatin");
if ($koneksi->connect_error) {
    die("Koneksi gagal: " . $koneksi->connect_error);
}
?>
