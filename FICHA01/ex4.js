let numero = +prompt("Digite um número inteiro positivo:");
let soma = 0;

for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        soma += i;
    }
}

if (soma === numero) {
    alert(`${numero} é um número perfeito!`);
} else {
    alert(`${numero} não é um número perfeito.`);
}