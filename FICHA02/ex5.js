function calcSoma() {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
}
console.log(`Soma: ${calcSoma(2, 4, 6, 8)}`);