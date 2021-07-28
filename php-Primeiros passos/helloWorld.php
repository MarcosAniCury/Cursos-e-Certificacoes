<?php 
$idade = 9;
$idadeMais10 = $idade + 10;

$doisAoCubo = 2 ** 3; //operador multi
echo $idadeMais10. PHP_EOL; //End of Line, ou seja quebra linha
echo 'mostrar o tipo de idade:'.gettype($idade). PHP_EOL; //função para pegar o tipo
echo "\nMinha idade é $idade";
$maiorDeIdade = $idade >= 18 ? true : false; //operador ternario
echo PHP_EOL.$maiorDeIdade;

for ($i = 0;$i < 10;$i++) {
    if ($i == 5)
        continue; //caso deseje pular essa interação usa o continue
    
    echo "teste se nao é 5";
}

$teste = readLine("digite seu nome:"); //entrada de dados pelo terminal