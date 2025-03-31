let texto = prompt("Digite o texto:");
let palavra = prompt("Digite a palavra a procurar:");
function findWord(t, p) {
  return t.split(p).length - 1;
}
console.log(`Ocorrências: ${findWord(texto, palavra)}`);