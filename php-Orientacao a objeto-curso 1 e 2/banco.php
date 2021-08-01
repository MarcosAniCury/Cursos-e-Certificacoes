<?php

require_once 'src/Pessoa.php';
require_once 'src/Conta.php';
require_once 'src/Titular.php';
require_once 'src/Endereco.php';

$pconta = new Conta(new Titular('123.456.789-10','Marcos Ani Cury',new Endereco('Amazonas','Amazoninhas','Bananeira', '69')));
$pconta->printConta();
$pconta->depositar(300);
$pconta->printConta();
$sconta = new Conta(new Titular('132.456.789-10', 'Leticia America', new Endereco('Mato Grosso', 'Matinho Grossinho', 'Matinho Pequeno', '96')));
$sconta->printConta();
Conta::printNumeroConta();