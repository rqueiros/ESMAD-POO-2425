let numero = +prompt("Digite um número (0 para parar):");
let menor = numero;
let maior = numero;

while (numero !== 0) {
    if (numero < menor) {
        menor = numero;
    }
    if (numero > maior) {
        maior = numero;
    }
    numero = +prompt("Digite um número (0 para parar):");
}

if (menor === 0 && maior === 0) {
    console.log("Nenhum número foi inserido.");
} else {
    console.log(`Menor número: ${menor}`);
    console.log(`Maior número: ${maior}`);
}