<?php
$dias = array(
    "Lunes" => "Monday",   
    "Martes" => "Tuesday",
    "Miércoles" => "Wednesday",
    "Jueves" => "Thursday",
    "Viernes" => "Friday",
    "Sábado" => "Saturday",
    "Domingo" => "Sunday"
);

foreach($dias as $español => $ingles) {
    echo "El día ".$español . " en inglés se escribe ". $ingles . "\n";
}

$dia_buscado=readline("\nEscribe el día de la semana que quieras saber como se escribe en inglés: ");
foreach($dias as $español => $ingles){
    if($dia_buscado === $español){
        echo "\n\t El día $dia_buscado se escribe en inglés $ingles ";
        break;
    }
}

echo "\n\n";