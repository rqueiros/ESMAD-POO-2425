let fatorial = (n) => {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
};
let numero = +prompt("Digite um número:");
console.log(`Fatorial de ${numero} é ${fatorial(numero)}`);