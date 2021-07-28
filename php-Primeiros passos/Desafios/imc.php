<?php
/*
*   Primeiros códigos
*   Calculo do imc de qualquer pessoa com base na formula peso/(altura**2)
*   By: Marcos Ani Cury Vinagre Silva
*   Feito em: 17/07/2001
*/

echo "Calculo de IMC".PHP_EOL;
$peso = readLine("Digite seu peso:");
$altura = readLine("Digite sua altura (em m):");

$resultado = $peso/($altura**2); //Formula IMC

if ($resultado < 18.5)
    echo "Você está abaixo do IMC esperado".PHP_EOL;
else if ($resultado > 25)
    echo "Você está acima do IMC esperado".PHP_EOL;
else 
    echo "Você está dentro do IMC esperado".PHP_EOL;