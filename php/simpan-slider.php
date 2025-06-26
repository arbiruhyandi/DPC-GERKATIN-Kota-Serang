<?php
$images = glob("../images/*.png");
$html = "<div class='slides'>\n";
foreach ($images as $img) {
    $src = str_replace("../", "", $img);
    $html .= "<img src='\"$src\"' alt='Slider'>\n";
}
$html .= "</div>";

file_put_contents("../index.html", $html);
header("Location: ../edit-index.html");
?>
