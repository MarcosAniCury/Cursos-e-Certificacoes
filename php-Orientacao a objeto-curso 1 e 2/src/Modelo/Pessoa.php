<?php

namespace Raiz\Banco\Modelo;

class Pessoa
{
    //atributos da classe
    protected string $nome;
    protected string $cpf;

    //construtor e descontrutor
    function __construct( string $cpf, string $nome)
    {
        $this->validaCpf($cpf);
        $this->cpf = $cpf;
        $this->validaNome($nome);
        $this->nome = $nome;
    }

    //gets e sets
    function getNome() 
    {
        return $this->nome;
    }

    function getCpf()
    {
        return $this->cpf;
    }

    //metodos usados somente na classe
    protected function validaCpf($cpf)
    {
        if (strlen($cpf) != 14) {
            echo 'Cpf inválido'.PHP_EOL;
            exit();
        }
    }

    protected function validaNome($nome)
    {
        if (strlen($nome) < 5) {
            echo 'O nome precisa ter mais de 5 caracteres'.PHP_EOL;
            exit();
        }
    }
}