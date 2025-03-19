let num1 = +prompt("Digite o primeiro número:");
let num2 = +prompt("Digite o segundo número:");

// Definir os limites do intervalo
let inicio = Math.min(num1, num2);
let fim = Math.max(num1, num2);
let soma = 0;

// Somatório do intervalo
for (let i = inicio; i <= fim; i++) {
    soma += i;
}

alert(`O somatório dos números no intervalo de ${inicio} a ${fim} é: ${soma}`);