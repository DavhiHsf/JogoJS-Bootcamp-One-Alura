// Alert exibe uma mensagem na tela do site em um pop-up
alert('Bem vindo ao jogo do Número Secreto!');

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {

    // Prompt exibe uma mensagem na tela do site e exije uma interação em um pop-up
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // condicionais If e Else
    if (numeroSecreto == chute) {

        break; // Sai imediatamente do while caso a condição seja atendida.

    } else if (chute > numeroSecreto) {
        alert(`Você errou! O número secreto é menor que ${chute}`);

    } else {
        alert(`Você errou! O número secreto é maior do que ${chute}`);

    }

    // Incrementação do valor da variável com + 1
    tentativas++;

}

// Operadores ternários
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Esse é o número secreto (${numeroSecreto}), você acertou com ${tentativas} ${palavraTentativa}!`);

// if (tentativas > 1) {
// alert(`Esse é o número secreto (${numeroSecreto}), você acertou com ${tentativas} tentativas!`);

// } else {
//     alert(`Esse é o número secreto (${numeroSecreto}), você acertou com ${tentativas} tentativa!`);

// }
