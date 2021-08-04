<?php

namespace Raiz\Banco\Model;

class Conta 
{
    //Atributos da Classe
    private Titular $titular;
    private float $saldo;
    private static $numeroContas = 0; //metodo estatico, ou seja metodo que tera o mesmo valor em todas as instancias da classe

    //construtores e descontrutores
    function __construct(Titular $titular)
    {
        echo 'Criando nova conta'.PHP_EOL;
        $this->titular = $titular;
        $this->saldo = 0;

        self::$numeroContas++;
        echo 'Conta criada com sucesso'.PHP_EOL;
    }

    function __destruct()
    {
        self::$numeroContas--;
        echo "\nConta de titular:".$this->titular->getNome()."\nremovida com sucesso\n";
    }

    //Metodos da Classe
    public function sacar(float $valorSaque)
    {
        if ($valorSaque > $this->saldo){
            echo 'Saque não autorizado, valor insuficiente'.PHP_EOL;
            return;
        }

            $this->saldo -= $valorSaque;
            echo 'Saque realizado com sucesso'.PHP_EOL;
    }

    public function depositar(float $deposito)
    {
        if ($deposito <= 0) {
            echo 'Deposito não autorizado, valor negativo ou nulo'.PHP_EOL;
            return;
        }

            $this->saldo += $deposito;
            echo 'Deposito realizado com sucesso'.PHP_EOL;
    }

    public function transferir(float $valorTransferir, Conta &$conta)
    {
        if ($this->saldo < $valorTransferir){
            echo 'Transferência não autorizada, saldo insuficiente'.PHP_EOL;
            return;
        }

            $this->sacar($valorTransferir);
            $conta->depositar($valorTransferir);
            echo 'Transferência realizada com sucesso'.PHP_EOL;
    }

    //Gets e Sets
    function getSaldo()
    {
        return $this->saldo;
    }

    function printConta()
    {
        $this->titular->printTitular();
        echo "Saldo:$this->saldo\n";
    }

    //metodos usados somente na classe
    public static function printNumeroConta() //metodo estatico, ou seja metodo independente de instancia da classe
    {
        echo "\nNumero de contas existente:".self::$numeroContas.PHP_EOL;
    }

    /*function criarConta(string $cpf, string $nomeTitular, float $saldo): array
    {
        return [
            $cpf => [
                'titular' => $nomeTitular,
                'saldo' => $saldo
            ]
        ];
    }*/
}