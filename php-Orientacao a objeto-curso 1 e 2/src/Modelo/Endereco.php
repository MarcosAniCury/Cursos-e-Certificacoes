<?php

namespace Raiz\Banco\Modelo;

class Endereco
{
    //atributos da classe
    private string $cidade;
    private string $bairro;
    private string $rua;
    private string $numero;
    
    //construtores e destrutores
    function __construct(string $cidade, string $bairro, string $rua, $numero)
    {
        $this->cidade = $cidade;
        $this->bairro = $bairro;
        $this->rua = $rua;
        $this->numero = $numero;
    }

    //gets e sets
    function getCidade()
    {
        return $this->cidade;
    }

    function getBairro()
    {
        return $this->bairro;
    }

    function getRua()
    {
        return $this->rua;
    }
    
    function getNumero()
    {
        return $this->numero;
    }

    //funcoes da classe
    public function printEndereco()
    {
        echo "--Endereço--\nCidade:$this->cidade\n";
        echo "Bairro:$this->bairro\n";
        echo "Rua:$this->rua\n";
        echo "Numero:$this->numero\n";
    }
}