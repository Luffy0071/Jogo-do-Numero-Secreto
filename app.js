numSecreto = 93;
let chute

while (chute != numSecreto){
    chute = prompt("Vamos jogar um jogo? Acabei de pensar em um número. Em que número eu pensei?");
    if (chute == numSecreto) {
        break;
    }
    chute > numSecreto ? alert("Eu pensei em um número MENOR que esse. Vamos tentar novamente?") : alert("Eu pensei em um número MAIOR que esse. Vamos tentar novamente")
        }

alert("Parabéns! O número que pensei foi realmente " + numSecreto)

