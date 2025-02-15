<?php

$user_names = ['pepito', 'mr.michi', 'fbn'];

do {
    $user_name = readline ('por favor indica tu nombre de usuario: ');
    echo "\n";

    
if ( in_array ($user_name , $user_names)) {
    echo "ya te encuentras registrado \n";
}else {
    echo "bienvenio \n";
}

}while (in_array($user_name, $user_names)); //in_array nos ayuda a validar la informacion de un array, por ejemplo un nombre, contraseña, etc.



echo "\n";