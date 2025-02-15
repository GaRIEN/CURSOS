<?php
    $contador = 10;

    while ($contador > 0) {
      echo "$contador \n";
      $contador--;
      sleep(1); //Aqui le indican cuantos segundos quieren esperar entre iteracion e iteracion
    }