<?php
#Primer forma
    $frutas = array("pera", "manzana", "uva", 2) ;
#Desde este tipo podemos acceder segun el indice 

#Segunda forma
$frutas = ["Uva","Pera","Sandia"];
#Desde este tipo podemos acceder segun el indice 

#Arreglo Asociativo
$joe = array('name'=>'Jose','age'=>25,'country'=>'mexico');
#Para acceder a este tipo debemos hacerlo de lasiguente forma $nameArray['namePropiedad']
echo"hola " .$joe['name'];




$edades = [12,14,18,21,24,40];
$nombre = "Nombre";

 // count() : Saber el tamaño de un arreglo
 echo(count($edades));

 /**
  * array_push(): Agregas uno o mas elemntos al final de un array
  */
  array_push($edades,50);
  var_dump($edades);

/**
 * is_array(): La función is_array() verifica si una variable es una matriz o no.
 * Esta función devuelve verdaderosi la variable es una matriz,de lo contrario devuelve falso
 */
if(is_array($nombre)){
    echo "Si es un array";
}else{
    echo "No es un array";
}

/**
 * explode(): Convierte un string en un array
 * explode(separetor,string,limit); 
 */
$frase = "Nunca pares de aprender";
var_dump(explode(" ",$frase));

/**
 * implode(): Convierte un array en un string
 * implode(separador,string);
 */
$palabras = ["Me","encanta","platzi","<3"];
var_dump(implode(" ",$palabras));