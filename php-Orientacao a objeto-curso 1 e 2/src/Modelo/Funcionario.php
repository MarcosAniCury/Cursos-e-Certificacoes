<?php

namespace Raiz\Banco\Modelo;

class Funcionario extends Pessoa
{
    //atributos da classe
    private string $cargo;

    //construtores e desconstrutores
    function __construct(string $cpf, string $nome, string $cargo)
    {
        parent::__construct($cpf,$nome);
        $this->cargo = $cargo;
    }

    //funcoes da classe
    function printFuncionario()
    {
        echo "\nNome do funcionário(a):$this->nome\n";
        echo "Cpf do funcionário(a):$this->cpf\n";
        echo "Cargo do funcionário(a):$this->cargo\n";
    }

    function alteraNome(string $novoNome)
    {
        $this->validaNome($novoNome);
        $this->nome = $novoNome;
    }
}