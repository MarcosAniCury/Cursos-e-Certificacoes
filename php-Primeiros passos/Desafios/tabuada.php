<?php
/*
*   Primeiros códigos
*   Tabuada de qualquer valor
*   By: Marcos Ani Cury Vinagre Silva
*   Feito em: 17/07/2001
*/
echo "Tabuada".PHP_EOL;
echo "Digite um numero maior que zero para exibir sua tabuada".PHP_EOL;
$numero = readLine("Digite o numero:");

echo "tabuada do numero $numero".PHP_EOL;
for($i = 1;$i <= 10; $i++)
    echo "$i - # $numero x ".$numero*$i." #".PHP_EOL;