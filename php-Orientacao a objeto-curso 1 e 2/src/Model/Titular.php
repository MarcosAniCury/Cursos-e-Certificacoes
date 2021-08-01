<?php

namespace Raiz\Banco\Model;

class Titular extends Pessoa
{
    //atributos da classe
    private Endereco $endereco;

    //construtores e destrutores
    function __construct(string $cpf,string $nome,Endereco $endereco)
    {   
        parent::__construct($cpf,$nome);
        $this->endereco = $endereco;
    }

    //funcoes da classe
    public function printTitular()
    {
        echo "\nTitular da conta:$this->nome\n";
        echo "Cpf do titular:$this->cpf\n";
        $this->endereco->printEndereco();
    }
}