import random

def jogar():
    print("#################################")
    print("Bem vindo ao jogo de adivinhacao!")
    print("#################################")

    numero_secreto = random.randrange(1,101)

    print("Qual nível de dificuldade?")
    print("(1) Fácil (2) Médio (3) Difícil")
    nivel = int(input("Qual nível:"))

    if nivel == 1:
        tentativas_restantes = 20
    elif nivel == 2:
        tentativas_restantes = 10
    else:
        tentativas_restantes = 5

    while tentativas_restantes > 0:
        print("Tentativas restantes "+str(tentativas_restantes))
        str_chute = input("Digite o seu numero: ")

        if not str_chute.isdigit():
            print("Deve ser digitado um número\n")
            continue

        chute = int(str_chute)
        print("Voce digitou {}".format(str_chute))

        if chute <= 0:
            print("O numero digitado deve ser maior que 0\n")
            continue

        if chute == numero_secreto:
            print("acertou\n")
            break
        elif chute > numero_secreto:
            print(f"O numero {str_chute} e maior que o numero secreto\n")
        else:
            print("O numero {} e menor que o numero secreto\n".format(str_chute))
        tentativas_restantes -= 1

    if tentativas_restantes == 0:
        print(f"Voce perdeu, o numero secreto era {numero_secreto}\n")

    print("Fim do jogo")

if __name__ == "__main__":
    jogar()