<?php

function printFirst($array) 
{
    echo "Primeiro valor do array é $array[0]\n\n";
}

function retirarSaldo(Float $valor, array &$conta)
{
    $conta['saldo'] -= $valor;
}
