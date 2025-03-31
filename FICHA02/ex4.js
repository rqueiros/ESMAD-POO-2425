function showTabuada(numero = 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
let num = +prompt("Digite um número para a tabuada:");
showTabuada(num);