<?php

    echo "<pre>";
    var_dump($_FILES);
    echo "</pre>";

    $basename=$_FILES["image"]["name"];
    $image = $_FILES["image"]["tmp_name"];
    $ruta_a_subir= "./images/$basename";
    move_uploaded_file($image,$ruta_a_subir);

    echo $basename;

