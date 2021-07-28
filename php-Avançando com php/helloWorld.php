<?php

//include é utilizado para quando você não tem certeza se o arquivo existe (gera warning)
//require quando você tem certeza que o arquivo existe (gera error)
require 'helloWorldFunc.php';

//Duas formas de estrutar coleções de array
$idadeList = array(10, 11, 12, 13, 14, 15);
$idadeLista = [10, 11, 12, 13, 14, 15];

printFirst(array: $idadeList); //passagem por valor

for ($i = 0;$i < count($idadeLista);$i++) {
    echo "Loop $i valor do idadeLista $idadeLista[$i]".PHP_EOL;
}

echo PHP_EOL;

//exemplo conta corrente com array associativo

$conta1 = [
    'titular' => 'Marcos',
    'saldo' => 1000
];

$conta2 = [
    'titular' => 'Adriana',
    'saldo' => 100
];

$contasCorrente = [$conta1,$conta2];

retirarSaldo(200, $contasCorrente[0]); //passagem por referência

for ($i = 0;$i < count($contasCorrente);$i++) {
    echo 'O nome do titular da conta é '.$contasCorrente[$i]['titular'].PHP_EOL;
    echo 'O saldo da conta é '.$contasCorrente[$i]['saldo'].PHP_EOL.PHP_EOL;
}

echo PHP_EOL;

$contasCorrente[] = [
    'titular' => 'Leticia',
    'saldo' => 500
];

unset($contasCorrente[1]); //liberar endereço de memória

foreach ($contasCorrente as $indice => $valor) {
    ['titular' => $titular] = $valor;
    echo 'conta: '.$titular.PHP_EOL;
    echo "indice: $indice\n\n";
}