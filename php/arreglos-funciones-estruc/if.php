<?php
$a=10;
$b=5;

if ($a > $b):
    echo $a." es mayor que ".$b;
elseif ($a == $b): 
    echo $a." igual ".$b;
else:
    echo $a." no es ni mayor ni igual a ".$b;
endif;