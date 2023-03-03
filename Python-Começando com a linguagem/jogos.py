import forca
import advinhacao

print("#################################")
print("Escolha seu jogo!")
print("#################################")

print("(1) Forca (2) Adivinhacao")

jogo = int(input("Escolha o jogo:"))
print("\n\n")

if jogo == 1:
    forca.jogar()
elif jogo == 2:
    advinhacao.jogar()