<?php
    $numero = 1;

    switch($numero) {
        case 0:
            echo "esto no se ejecuta";
            break;
        case 1:
            echo "este se ejecuta por que la opcion es verdadera";
            break;
        default :
            echo "este se ejecuta ya que el case anterior no tiene break por ende se ejecutara la siguiente sentencia";
    }