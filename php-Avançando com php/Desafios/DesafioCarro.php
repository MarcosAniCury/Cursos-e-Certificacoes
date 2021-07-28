<?php

$flag = -1;

$carros = [];

do{
    echo "\nMenu carros:\n";
    echo "1-Cadastrar um Carro\n";
    echo "2-Visualizar todos os Carros\n\n";
    echo "0-Sair do sistema:\n\n";
    $flag = readLine('Opção:');
    switch ($flag){
        case 1: $placa = readLine("\nDigite a placa do carro:");
            $marca = readLine("\nDigite a marca do carro:");
            $modelo = readLine("\nDigite o modelo do carro:");
            $carros[$placa] = [
                'marca' => $marca,
                'modelo' => $modelo
            ];
            echo "\n\nCarro registrado com sucesso\n\n";
            break;
        case 2:echo "\n\nCarros cadastrados:\n";
            foreach ($carros as $placa => $carro) {
                echo "\nPlaca do carro: $placa";
                echo PHP_EOL.'Marca do carro: '.$carro['marca'];
                echo PHP_EOL.'Modelo do carro: '.$carro['modelo'].PHP_EOL;
            }
            break;
        case 0: echo "\nObrigado por usar o sistema, volte sempre";
            break;
        default: echo "\nOpção invalida, digite novamente";
            break;
    }
}while($flag != 0);