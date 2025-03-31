let texto = prompt("Digite um texto:");
function showInverse(t) {
  let palavras = t.split(" ").reverse();
  return palavras.join(" ");
}
console.log(`Texto invertido: ${showInverse(texto)}`);