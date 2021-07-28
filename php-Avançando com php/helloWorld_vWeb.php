<?php

//Para hostear o server só utilizar "php -S localhost:8080" no terminal

require 'helloWorldFunc.php';

$idadeList = array(10, 11, 12, 13, 14, 15);
$idadeLista = [10, 11, 12, 13, 14, 15];

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

$contasCorrente[] = [
    'titular' => 'Leticia',
    'saldo' => 500
];

?>

<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
    </head>
    <body>
        <h1> Contas Correntes </h1>
        <dl>
            <?php foreach($contasCorrente as $conta) {?>
                <dt> <h3> Titular: <?= $conta['titular']; ?> </h3></dt>
                <dd> Saldo:<?= $conta['saldo']; ?></dd>
            <?php } ?>
        </dl>
    </body>
</html>