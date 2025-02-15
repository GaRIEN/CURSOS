<?php

function get_lenguaje() {
  
  $numero_aleatorio = rand(1,5);
  
  if ($numero_aleatorio == 1){
    echo ('El numero 1 corresponde al lenguaje Python ');
    
  } else if ($numero_aleatorio == 2){
    echo ('El numero 2 corresponde a Javascript ');
  }else{
    echo ('El numero '. $numero_aleatorio.' no tiene lenguaje asociado ');
  }
}

 for ($i=0; $i < 2; $i++) { 
  get_lenguaje();
  echo "<br>"; 
}



function es_estudiante_legend($platzi_rank) {

    if ($platzi_rank >= 20000){
        echo "Eres un estudiante legend 🙂\n";
    }else{
        echo "Aun no eres un estudiante legend 😫\n";
    }

}

do {

    $platzi_rank_user = (int) readline("Introduzca su rank de Platzi: ");
    
    es_estudiante_legend($platzi_rank_user);
    
    $program_continue = strtolower(readline("¿Desea terminar de ejecutar el programa? Y/N: "));
    
    
    // echo "Su respuesta fue $program_continue";

} while ($program_continue != "y");

echo "\n";


//FUNCION CON PARAMETROS

function suma($a, $b) { 

echo "suma los valores ".$a." + ".$b." = ".$a + $b. "<br>";

};
suma(3,9);
suma(5,12);
suma(13,19);
suma(33,91);

// *Declaromos la funcion con el desempaquetador
function suma_infinity (...$desempacar) {  

    $suma = 0;
  
    foreach ($desempacar as $arreglo) {
      $suma += $arreglo;
    }
  
    echo "La suma total es: $suma\n";
  }
  
  // *Usamos la funcion con los valores a desempaquetar
  suma_infinity(1, 2);
  suma_infinity(10, 20, 30);
  suma_infinity(100, 200, 300, 400, 500);


//FUNCION CON RETURN
  function sumar_ingresos(...$ingresos_dinero){
    $suma_ingresos = 0;
    foreach($ingresos_dinero as $numero){
        $suma_ingresos += $numero;

    }
    return $suma_ingresos;
}

function sumar_egresos(...$egresos_dinero){
    $suma_egresos = 0;
    foreach($egresos_dinero as $numero){
        $suma_egresos += $numero;

    }
    return $suma_egresos;
}

function balance($ingresos, $egresos){
    
    
    $balance = $ingresos - $egresos;

    return $balance;
}

echo "Tu balance mensual es " . balance(sumar_ingresos(100,280,500), sumar_egresos(20,30)) . "\n";


//FUNCION NAVE ESPACIAL
$preciosDeCafes = [12,56,32,48,19,36];

usort($preciosDeCafes,function ($a,$b)
{

  //<=>: Operador de nave espacial

  //Ordenar de mayor a menor
//  $nave = $b <=> $a;

//ordenar de menor a mayor
$nave = $a <=> $b;

  return $nave;
});


var_dump($preciosDeCafes);

echo "<br>";