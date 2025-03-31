let genero = prompt("Digite o género (M ou F):").toUpperCase();
let peso = parseFloat(prompt("Digite o peso em kg:"));
let altura = parseFloat(prompt("Digite a altura em cm:"));
let idade = parseInt(prompt("Digite a idade:"));

let tmb = 0;

if (genero === "M") {
    tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
} else if (genero === "F") {
    tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
} else {
    alert("Género inválido!");
}

if (tmb > 0) {
    alert(`A TMB estimada é: ${tmb.toFixed(2)} Kcal/dia`);
}